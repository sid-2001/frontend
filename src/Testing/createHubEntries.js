import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';

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

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function _listNodesOfHub(_hubId) {
    var response = await execute(queries.getHub, _hubId);
    var hub = response.data.getHub;
    var nodes = hub.nodes.items;
    return nodes;
}

/**
 * @Summary This function generate fake params for hubEntry.
 * @returns {params object}
 * @note structure of params {temperature, moisture, gas1}. which may change in futute
 * with the addition of new params like gas2.
 */
function _generateFakeParams() {
    return {
        temperature: randNum(0, 50),
        moisture: randNum(25, 50),
        gas1: randNum(100, 500)
    }
}
async function _createHubEntry(_hubId) {
    const nodes = await _listNodesOfHub(_hubId);
    /**
     * @note This description will change according to the final description structure of hubEntry.
     * It may also include alerts, average values etc.
     */
    var hubEntryDescription = {
        nodes: []
    }

    nodes.forEach(node => {
        hubEntryDescription.nodes.push(
            {
                uuid: node.uuid,
                name: node.name,
                params: _generateFakeParams()
            }
        )
    });

    const hubEntryDetails = {
        uuid: uuidv4(),
        hubId: _hubId,
        status: "active",
        description: JSON.stringify(hubEntryDescription)
    }

    var response = await execute(mutations.createHubEntry, hubEntryDetails);
    var hubEntry = response.data.createHubEntry;
    console.log(hubEntry);
}

/**
 * @summary This functions create FAKE hub entries. It create a entry for all hubs present in data base.
 */
async function createHubEntries() {
    console.log("Creating fake hub entries...")
    const hubIds = await getUuids(queries.listHubs, "listHubs");

    for (let i = 0; i < hubIds.length; i++) {
        var hubId = hubIds[i];
        await _createHubEntry(hubId);
    }
    console.log("Done.")
}

export default createHubEntries
