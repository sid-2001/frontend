import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subs from '../graphql/subscriptions';
import { v4 as uuidv4 } from 'uuid';
import * as warehouseQuery from './rejected scripts/cutomeWarehouseQueries';
import _ from 'lodash';

// GLOBAL VARIABLES
// -------------------------
const godownPerWarehouse = 2;
const compartmentPerGodown = 2;
const stackPerCompartment = 2;
const nodePerStack = 2;
// -------------------------

/**
 * 
 * @param {graphql query string} _query e.g. mutations.createWarehouse
 * @param {object} _input data send with Query/Mutation.
 * @returns 
 */
async function execute(_query, _input) {

    if (_input == undefined) {
        return await API.graphql(
            {
                query: _query
            }
        );
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

    return await API.graphql(
        {
            query: _query,
            variables: myVars
        }
    )
}

// /**
//  * 
//  * @param {object} _warehouse 
//  * @param {String} _entity Possible values: warehouse, godown, compartment, hub, stack, node
//  * @returns {array of objects}
//  * @summary This function list is used to list entities.
//  */
// async function list(_entity) {
//     const entityToQuery = {
//         "warehouse": queries.listWarehouses,
//         "godown": queries.listGodowns,
//         "compartment": queries.listCompartments,
//         "hub": queries.listHubs,
//         "stack": queries.listStacks,
//         "node": queries.listNodes
//     }
//     const queryName = {
//         "warehouse": "listWarehouses",
//         "godown": "listGodowns",
//         "compartment": "listCompartments",
//         "hub": "listHubs",
//         "stack": "listStacks",
//         "node": "listNodes"
//     }
//     var response = await execute(entityToQuery[_entity]);
//     var list = _.get(response, `data.${queryName[_entity]}.items`);
//     // var list = await _response.data[queryName[_entity]].items;
//     var result = list.map((entity) => {
//         return {
//             uuid: entity.uuid,
//             name: entity.name,
//             description: JSON.parse(entity.description)
//         }
//     })
//     return result;
// }

/**
 * 
 * @param {object} _warehouse 
 * @param {string} _entity possible values: "godown", "compartment", "hub", "stack", "node"
 * @returns {array of objects} object: {uuid, name, description}  
 */
async function listEntityOfWarehouse(_warehouse, _entity) {
    const entityToQuery = {
        "godown": warehouseQuery.listGodowns,
        "compartment": warehouseQuery.listCompartments,
        // "hub": warehouseQuery.listHubs,
        "stack": warehouseQuery.listStacks,
        "node": warehouseQuery.listNodes
    }
    const path = {
        "godown": "data.getWarehouse.godowns.items",
        "compartment": "data.getWarehouse.godowns.items[_i].compartments.items",
        // "hub": "data.getWarehouse.godowns.items[_i].compartments.items.hub",
        "stack": "data.getWarehouse.godowns.items[_i].compartments.items[_j].stacks.items",
        "node": "data.getWarehouse.godowns.items[_i].compartments.items[_j].stacks.items[_k].node.items"
    }

    // we've to retrieve from compartment
    if (_entity == "hub") {
        var response = await execute(entityToQuery["compartment"]);
    } else {
        var _response = await execute(entityToQuery[_entity], _warehouse.uuid);
        // var result = _response[path[_entity]];
        var result = _.get(_response, path[_entity]);
    }
    return result;
}

/**
 * 
 * @returns {object} warehouse : {uuid, name, godownCount}
 */
async function createWarehouse() {
    console.log("Creating Warehouse!!");
    var warehouseDetails = {
        uuid: uuidv4(),
        name: "W1",
        description: JSON.stringify({
          location: "Pahadganj",
          godownCount: godownPerWarehouse
        })
      }
    var _response = await execute(mutations.createWarehouse, warehouseDetails);
    var response = _response.data.createWarehouse;
    console.log(response);
    console.log("Completed!!");
    var warehouse = {
        uuid: response.uuid,
        name: response.name,
        godownCount: JSON.parse(response.description).godownCount
    };
    return warehouse;
}

/**
 * 
 * @param {object} warehouse 
 * @param {int} _index Godown's index) in warehouse.
 */
async function _createGodown(_warehouse, _index) {
    const godownDetails = {
        uuid: uuidv4(),
        name: `${_warehouse.name} G${_index}`,
        description: JSON.stringify({
            compartmentCount: compartmentPerGodown
        }),
        warehouseGodownsId: _warehouse.uuid
    }
   var _response = await execute(mutations.createGodown, godownDetails);
   var response = _response.data.createGodown;
   console.log(response);
}

/**
 * 
 * @param {object} warehouse 
 */
async function createGodowns(_warehouse) {
    console.log("Creating Godowns");
    
    for (let i=1; i <= _warehouse.godownCount; i++) {
        await _createGodown(_warehouse, i);
    }
    console.log("Completed!!");

}

/**
 * 
 * @param {object} _godown 
 * @param {int} _index Compartment's index in Godown.
 */
async function _createCompartment(_godown, _index) {
    const compartmentDetails = {
        uuid: uuidv4(),
        name: `${_godown.name} C${_index}`,
        description: JSON.stringify({
            stackCount: stackPerCompartment
        }),
        godownCompartmentsId: _godown.uuid
    }
    var response = await execute(mutations.createCompartment, compartmentDetails);
    response = response.data.createCompartment;
    console.log(response);
}

/**
 * @param {object} _warehouse 
 */
async function createCompartments(_warehouse) {
    const godowns = await listEntityOfWarehouse(_warehouse, "godown");
    const godownCount = godowns.length;
    console.log("Creating Compartments!!");
    // NOTE: we can't use forEach loop here. It doesn't support await function
    for (let i = 0; i < godownCount; i++) {
        let godown = godowns[i];
        let godownDesc = JSON.parse(godown.description);
        let compartmentCount = godownDesc['compartmentCount'];

        for (let index=1; index <= compartmentCount; index++) {
                    await _createCompartment(godown, index);
                }
    }
    console.log("Completed!!");
}

/**
 * 
 * @param {object} _compartment 
 * @param {ID} _hubUuid 
 */
async function _updateCompartmentHubId(_compartment, _hubUuid) {
    const inputData = {
        uuid: _compartment.uuid,
        compartmentHubId: _hubUuid
    };
    var response = await execute(mutations.updateCompartment, inputData);
    response = response.data.updateCompartment;
    console.log(response);
}

async function _createHub(_compartment) {
    const hubDetails = {
        uuid: uuidv4(),
        name: (_compartment.name).replace("C", "H"),
        hubCompartmentId: _compartment.uuid
    }
    var response = await execute(mutations.createHub, hubDetails);
    response = response.data.createHub;
    console.log(response);
    console.log("Updating Compartment...");
    /**@todo update hubCompartmentId in compartment. func(compartment, hubUuid) */
    await _updateCompartmentHubId(_compartment, hubDetails.uuid);
    console.log("Updated!!")
}

async function createHubs(_warehouse) {
    const compartments = await listEntityOfWarehouse(_warehouse, "compartment");
    const compartmentCount = compartments.length;
    console.log("Creating Hubs !!");
    for (let i=0; i < compartmentCount; i++) {
        let compartment = compartments[i];
        await _createHub(compartment);
    }
    console.log("Completed !!")
}




export {
    createWarehouse,
    createGodowns,
    createCompartments,
    createHubs
}