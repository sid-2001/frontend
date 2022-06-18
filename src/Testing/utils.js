import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
import cleanDatabase from './cleanDatabase';
import createHubEntries from './createHubEntries';


// GLOBAL VARIABLES
// -------------------------
const godownPerWarehouse = 2;
const compartmentPerGodown = 2;
const stackPerCompartment = 2;
const nodePerStack = 2;
// -------------------------

// EASE-OUT-WORK functions
// -------------------------

/**
 * 
 * @param {graphql query string} _query e.g. mutations.createWarehouse
 * @param {object} _input data send with Query/Mutation.
 * @returns 
 */
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

/**
 * 
 * @param {object} _parent 
 * @param {string} _childName 
 * @returns 
 */
function getCount(_parent, _childName) {
    var parentDesc = JSON.parse(_parent.description);
    var childCount = parentDesc[`${_childName}Count`];
    return childCount;
}

async function _getHubIdFromStack(_stack) {
    const compartmentId = _stack.compartmentStacksId;
    var response = await execute(queries.getCompartment, compartmentId);
    var compartment = response.data.getCompartment;
    const hubId = compartment.hub.uuid;
    return hubId;
}
// ------------------------------

async function createWarehouse() {
    var warehouseDetails = {
        uuid: uuidv4(),
        name: "W",
        description: JSON.stringify({
          location: "Pahadganj",
          godownCount: godownPerWarehouse
        })
      }
    var response = await execute(mutations.createWarehouse, warehouseDetails);
    var warehouse = response.data.createWarehouse;
    console.log(warehouse);
    return warehouse;
}

async function _createGodown(_warehouse, _index) {
    const godownDetails = {
        uuid: uuidv4(),
        name: `${_warehouse.name} G${_index}`,
        description: JSON.stringify({
            compartmentCount: compartmentPerGodown
        }),
        warehouseGodownsId: _warehouse.uuid
    }
   var response = await execute(mutations.createGodown, godownDetails);
   var godown = response.data.createGodown;
   return godown;
}

async function createGodowns(_warehouse) {
    var godowns = [];
    var godownCount = getCount(_warehouse, "godown");

    for (let index=1; index <= godownCount; index++) {
        godowns.push(await _createGodown(_warehouse, index));
    }
    console.log(godowns);
    return godowns;
}

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
    var compartment = response.data.createCompartment;
    return compartment;
}

async function createCompartments(_godowns) {
    var compartments = [];
    const godownCount = _godowns.length;
    // NOTE: we can't use forEach loop here. It doesn't support await function
    for (let i = 0; i < godownCount; i++) {
        let godown = _godowns[i];
        let compartmentCount = getCount(godown, "compartment");

        for (let index=1; index <= compartmentCount; index++) {
            compartments.push(await _createCompartment(godown, index));
        }
    }
    console.log(compartments);
    return compartments;
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
    await execute(mutations.updateCompartment, inputData);
}

async function _createHub(_compartment) {
    const hubDetails = {
        uuid: uuidv4(),
        name: (_compartment.name).replace("C", "H"),
        hubCompartmentId: _compartment.uuid
    }
    var response = await execute(mutations.createHub, hubDetails);
    var hub = response.data.createHub;
    await _updateCompartmentHubId(_compartment, hubDetails.uuid);
    return hub;
}

async function createHubs(_compartments) {
    var hubs = [];
    const compartmentCount = _compartments.length;

    for (let i=0; i < compartmentCount; i++) {
        let compartment = _compartments[i];
        hubs.push(await _createHub(compartment));
    }
    console.log(hubs);
    return hubs;
}

async function _createStack(_compartment, _index) {
    const stackDetails = {
        uuid: uuidv4(),
        name: `${_compartment.name} S${_index}`,
        description: JSON.stringify({
            nodeCount: nodePerStack
        }),
        compartmentStacksId: _compartment.uuid
    };
    var response = await execute(mutations.createStack, stackDetails);
    var stack = response.data.createStack;
    return stack;
}

async function createStacks(_compartments) {
    var stacks = [];
    const compartmentCount = _compartments.length;

    for (let i = 0; i < compartmentCount; i++) {
        let compartment = _compartments[i];
        let stackCount = getCount(compartment, "stack");

        for (let index = 1; index <= stackCount; index++) {
            stacks.push(await _createStack(compartment, index));
        }
    }
    console.log(stacks);
    return stacks;
}

async function _createNode(_stack, _index) {
    const nodeDetails = {
        uuid: uuidv4(),
        name: `${_stack.name} N${_index}`,
    /**
     * @note NOTE: idk why but "stackNodeId" is given in generated mutations.
     * instead of stakNodesId 
     */
        stackNodeId: _stack.uuid,
        hubNodesId: await _getHubIdFromStack(_stack)
    }
    var response = await execute(mutations.createNode, nodeDetails);
    var node = response.data.createNode;
    return node;
}

async function createNodes(_stacks) {
    var nodes = [];
    const stackCount = _stacks.length;
    
    for (let i = 0; i < stackCount; i++) {
        let stack = _stacks[i];
        let nodeCount = getCount(stack, "node");

        for (let index = 1; index <= nodeCount; index++) {
            nodes.push(await _createNode(stack, index));
        }
    }
    console.log(nodes);
    return nodes;
}

export {
    createWarehouse,
    createGodowns,
    createCompartments,
    createHubs,
    createStacks,
    createNodes,
    cleanDatabase,
    createHubEntries
}