import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subs from './graphql/subscriptions'
import { v4 as uuidv4 } from 'uuid';

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function createManager(){

  var managerId = uuidv4()
  var managerDetails = {
    uuid: managerId,
    profile: JSON.stringify({
      name: "Rakshit Satija",
      age: 25
    })
  }
  
  var manager = await API.graphql({query: mutations.createManager, variables: {input: managerDetails}})
  var managerId = manager.data.createManager.uuid

  var warehouses = await API.graphql({query: queries.listWarehouses})
  warehouses = warehouses.data.listWarehouses.items
  console.log(warehouses)
  for (var warehouse of warehouses){
    console.log(`ware: ${warehouse}`)
    if (warehouse['name']==='warehouse 1'){
      var warehouseId = warehouse['uuid']
    }
  }

  console.log(`warehouseId: ${warehouseId}`)
  console.log(`managerId: ${managerId}`)
  var updateData = {
    // uuid is compulsory to provide.
    uuid: warehouseId,
    managerWarehousesId: managerId
  }

  await API.graphql({query: mutations.updateWarehouse, variables: {input: updateData}})
  console.log("Manager Created.")
}

async function constructWarehouse() {

  // WAREHOUSE
  console.log("Creating Warehouse!!")
  var warehouseDetails = {
    uuid: uuidv4(),
    name: "warehouse 1",
    description: JSON.stringify({
      location: "Pahadganj",
      godownCount: 2
    })
  }

  var warehouse = await API.graphql({ query: mutations.createWarehouse, variables: {input: warehouseDetails}})
  console.log("Completed!!")
  var warehouseUuid = warehouse.data.createWarehouse.uuid
  var godownCount = JSON.parse(warehouse.data.createWarehouse.description)["godownCount"]
  

  // GODOWN
  console.log("Creating Godowns")
  var godownsPerWarehouse = godownCount
  var godowns = []

  for (var i=1; i<godownsPerWarehouse+1; i++){
    
    var godId = uuidv4()
    var godownDetails = {
      uuid: godId,
      name: `godown_${i}`,
      description: JSON.stringify({
        nickName: `G${i}`,
        compartmentCount: 4
      }),
      warehouseGodownsId: warehouseUuid
    }

    var godown = await API.graphql({ query: mutations.createGodown, variables: {input: godownDetails}})

    godowns.push({
      id: godown.data.createGodown.uuid,
      comptCount: JSON.parse(godown.data.createGodown.description)["compartmentCount"]
    })
  }
  console.log("Completed!!")
  console.log(godowns)


  // COMPARTMENT
  console.log("Creating Compartments")

  var compts = []

  for (const [i, godown] of godowns.entries()){
    const compartmentPerGodown = godown['comptCount']
    var godId = godown["id"]
    for (var j = 1; j < compartmentPerGodown+1; j++){
      
      console.log(`i=${i}   j=${j}`)

      var comptId = uuidv4()
      var hubId = uuidv4()
      var stackPerCompt = 10

      var comptDescp = {
        stackCount: stackPerCompt,
        hubUniqueId: hubId,
        nodes: [],
        stacks: []
      }

      for (var k = 1; k < stackPerCompt; k++){
        var nodeId = uuidv4()   
        var nodeDetails = {
          uniqueNodeId: nodeId,
          name: `node_${k}`
        }
        var stackDetails = {
          nodeId: nodeId
        }
        comptDescp["nodes"].push(nodeDetails)
        comptDescp["stacks"].push(stackDetails)
      }

      var comptDetails = {
        uuid: comptId,
        name: `C${i}${j}`,
        description: JSON.stringify(comptDescp),
        godownCompartmentsId: godId,
      }

      var compt = await API.graphql({ query: mutations.createCompartment, variables: {input: comptDetails}})

      compts.push({
        id: compt.data.createCompartment.uuid,
        stackCount: JSON.parse(compt.data.createCompartment.description)["stackCount"]
      })
    }
  }
  console.log("Completed!!")

//   // STACK
//   console.log("Creating Stacks")
//   var stackUuids = []

//   for (const [i, compt] of compts.entries()){
//     var comptId = compt["id"]
//     var stackPerCompt = compt["stackCount"]
//     console.log(`compt no.${i}`)

//     for (var j = 1; j < stackPerCompt+1; j++){
//       var stackId = uuidv4()
//       var stackDetails = {
//         uuid: stackId,
//         name: `S${i}${j}`,
//         description: JSON.stringify({
// // ?????????????????????????????????????????????????????
//           nodeId: 
//         })
//         compartmentStacksId: comptId,
//         stackNodeId: nodeId
//       }

//       var nodeDetails = {
//         uuid: nodeId,
//         name: `N${i}${j}`,
//         nodeStackId: stackId,
//         hubNodesId: hubId
//       }

//       var stack = await API.graphql({ query: mutations.createStack, variables: {input: stackDetails}})
//       var node = await API.graphql({ query: mutations.createNode, variables: {input: nodeDetails}})

//       stackUuids.push(compt.data.createCompartment.uuid)
//       nodeUuids.push(hub.data.createHub.uuid)
//     }
//   }
// console.log("Completed!!")
}

async function populateHubData() {
  var response = await API.graphql({query: queries.listCompartments})
  var compts = response['data']['listCompartments']['items']
  
  console.log("populating data in Hubs")
  for (const [i, compt] of compts.entries()){
    
    console.log(`Hub ${i}`)

    var hubDescp = []
    var nodes = JSON.parse(compt["description"])["nodes"]

    for (const [j, node] of nodes.entries()){
      var nodeDetails = {
        uniqueNodeId: node["uniqueNodeId"],
        name: node["name"],
        description: {
          moisture: randNum(10, 40),
          temperature: randNum(10, 40)
        }
      }
      hubDescp.push(nodeDetails)
    }

    var hubDetails = {
      uuid: uuidv4(),
      name: `Hub_${i}`,
      hubUniqueId: JSON.parse(compt["description"])['hubUniqueId'],
      description: JSON.stringify(hubDescp),
      hubCompartmentId: compt["uuid"]
    }

    await API.graphql({
      query: mutations.createHub,
      variables: {
        input: hubDetails
      }
    })

    console.log("Hub created.")
  }
}

async function populateNodeData() {
  var response = await API.graphql({query: queries.listHubs})
  var hubs = response['data']['listHubs']['items']

  for (const [i, hub] of hubs.entries() ){
    var nodes = JSON.parse(hub["description"])

    for (const [j, node] of nodes.entries() ){
      var nodeDetails = {
        uuid: uuidv4(),
        name: node["name"],
        nodeUniqueId: node["uniqueNodeId"],
        params: JSON.stringify(node["description"]),
        hubNodesId: hub["uuid"]
      }
      await API.graphql({
        query: mutations.createNode,
        variables: {
          input: nodeDetails
        }
      })
    }
  }
  console.log("Done")
}

function App() {
  console.log("Hello World!! ")
  return (
    <div>
      <h1>Hello world!! Open console.</h1>
      <button onClick={constructWarehouse}>Construct warehouse</button>
      <br />
      <button onClick={createManager}>Create Manager</button>
      <br />
      <button onClick={populateHubData}>Insert Hub Data</button>
      <br />
      <button onClick={populateNodeData}>Insert Node Data</button>
      <br />
      <button onClick={testQuery}>Test Query</button>
      
    </div>
  );
}

export default App;