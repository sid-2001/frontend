import * as utils from './utils'

async function constructWarehouse() {
  // Warehouse
  const warehouse = await utils.createWarehouse();

  // Godown
  const godowns = await utils.createGodowns(warehouse);

  // Compartment
  const compartments = await utils.createCompartments(godowns);

  // Hub
  const hubs = await utils.createHubs(compartments);

  // Stacks
  const stacks = await utils.createStacks(compartments);

  // Nodes
  const nodes = await utils.createNodes(stacks);
}

async function eraseEverything() {
  utils.cleanDatabase();
}

async function populateHubData() {
  utils.createHubEntries()
}

function App() {
  console.log("Hello World!! ")
  return (
    <div>
      <h1>Hello world!! Open console.</h1>
      <button onClick={constructWarehouse}>Construct warehouse</button>
      <br />
      <button onClick={eraseEverything}>Erase everything.</button>
      {/* <br />
      <button onClick={createManager}>Create Manager</button> */}
      <br />
      <button onClick={populateHubData}>Insert Hub Data</button>
      {/* <br />
      <button onClick={populateNodeData}>Insert Node Data</button>  */}
      {/* <br />
      <br />
      <button onClick={listHubs}>List Hubs</button> */}
      {/* <button onClick={createHubEntry}>Create Hub Entry</button> */}
      {/* <h1>Hub Subscription</h1>
      <button onClick={subsToHub}>subscribe to onCreateHub</button>
      <button onClick={unsubsToHub}>Unsubcribe</button> */}
    </div>
  );
}

export default App;