import { Warehouse } from '@mui/icons-material';
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

async function execute(_query, _input) {

    if ( _input == undefined) {
        return await API.graphql(
            {
                query: _query
            }
        )
    }

    if ( typeof(_input) === 'string') {
        var myVars = {
            uuid: _input
        };
    } else {
        myVars = {
            input: _input
        }
    }
    var response = await API.graphql(
        {
            query: _query,
            variables: myVars
        }
    );
    return response;
}

async function getUuids(_query, _queryString) {
    var Uuids = [];
    var response = await execute(_query);
    response = response.data[_queryString].items;
    Uuids = response.map(item => item.uuid);
    return Uuids
}

async function deleteAll(_query, _uuids) {
    var count = _uuids.length;
    for (let i=0; i<count; i++) {
        await execute(_query, {uuid: _uuids[i]})
    }
}
async function cleanDatabase() {
    console.log("Cleaning...");
    // Warehouses
    const warehouseIds = await getUuids(queries.listWarehouses, "listWarehouses");
    await deleteAll(mutations.deleteWarehouse, warehouseIds);

    const godownIds = await getUuids(queries.listGodowns, "listGodowns");
    await deleteAll(mutations.deleteGodown, godownIds);

    const comptIds = await getUuids(queries.listCompartments, "listCompartments");
    await deleteAll(mutations.deleteCompartment, comptIds);

    const hubIds = await getUuids(queries.listHubs, "listHubs");
    await deleteAll(mutations.deleteHub, hubIds);

    const stackIds = await getUuids(queries.listStacks, "listStacks");
    await deleteAll(mutations.deleteStack, stackIds);

    const nodeIds = await getUuids(queries.listNodes, "listNodes");
    await deleteAll(mutations.deleteNode, nodeIds);

    const hubEntryIds = await getUuids(queries.listHubEntries, "listHubEntries");
    await deleteAll(mutations.deleteHubEntry, hubEntryIds);

    const nodeEntryIds = await getUuids(queries.listNodeEntries, "listNodeEntries");
    await deleteAll(mutations.deleteNodeEntry, nodeEntryIds);

    /**
     * Similarily for Manager, comodity, workers.
     */
    console.log("Done.")
}

export default cleanDatabase;