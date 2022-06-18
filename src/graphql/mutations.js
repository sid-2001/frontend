/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createManager = /* GraphQL */ `
  mutation CreateManager(
    $input: CreateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    createManager(input: $input, condition: $condition) {
      uuid
      profile
      warehouses {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          managerWarehousesId
        }
        nextToken
      }
      workers {
        items {
          uuid
          profile
          createdAt
          updatedAt
          managerWorkersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateManager = /* GraphQL */ `
  mutation UpdateManager(
    $input: UpdateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    updateManager(input: $input, condition: $condition) {
      uuid
      profile
      warehouses {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          managerWarehousesId
        }
        nextToken
      }
      workers {
        items {
          uuid
          profile
          createdAt
          updatedAt
          managerWorkersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteManager = /* GraphQL */ `
  mutation DeleteManager(
    $input: DeleteManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    deleteManager(input: $input, condition: $condition) {
      uuid
      profile
      warehouses {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          managerWarehousesId
        }
        nextToken
      }
      workers {
        items {
          uuid
          profile
          createdAt
          updatedAt
          managerWorkersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorker = /* GraphQL */ `
  mutation CreateWorker(
    $input: CreateWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    createWorker(input: $input, condition: $condition) {
      uuid
      profile
      notifications {
        items {
          id
          workerID
          notificationID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          workerID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      manager {
        uuid
        profile
        warehouses {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      managerWorkersId
    }
  }
`;
export const updateWorker = /* GraphQL */ `
  mutation UpdateWorker(
    $input: UpdateWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    updateWorker(input: $input, condition: $condition) {
      uuid
      profile
      notifications {
        items {
          id
          workerID
          notificationID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          workerID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      manager {
        uuid
        profile
        warehouses {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      managerWorkersId
    }
  }
`;
export const deleteWorker = /* GraphQL */ `
  mutation DeleteWorker(
    $input: DeleteWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    deleteWorker(input: $input, condition: $condition) {
      uuid
      profile
      notifications {
        items {
          id
          workerID
          notificationID
          createdAt
          updatedAt
        }
        nextToken
      }
      tasks {
        items {
          id
          workerID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      manager {
        uuid
        profile
        warehouses {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      managerWorkersId
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      uuid
      description
      wokers {
        items {
          id
          workerID
          notificationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      uuid
      description
      wokers {
        items {
          id
          workerID
          notificationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      uuid
      description
      wokers {
        items {
          id
          workerID
          notificationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      uuid
      description
      wokers {
        items {
          id
          workerID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      uuid
      description
      wokers {
        items {
          id
          workerID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      uuid
      description
      wokers {
        items {
          id
          workerID
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
      uuid
      name
      description
      godowns {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        nextToken
      }
      manager {
        uuid
        profile
        warehouses {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      managerWarehousesId
    }
  }
`;
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
      uuid
      name
      description
      godowns {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        nextToken
      }
      manager {
        uuid
        profile
        warehouses {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      managerWarehousesId
    }
  }
`;
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
      uuid
      name
      description
      godowns {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        nextToken
      }
      manager {
        uuid
        profile
        warehouses {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      managerWarehousesId
    }
  }
`;
export const createGodown = /* GraphQL */ `
  mutation CreateGodown(
    $input: CreateGodownInput!
    $condition: ModelGodownConditionInput
  ) {
    createGodown(input: $input, condition: $condition) {
      uuid
      name
      description
      compartments {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        nextToken
      }
      warehouse {
        uuid
        name
        description
        godowns {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWarehousesId
      }
      createdAt
      updatedAt
      warehouseGodownsId
    }
  }
`;
export const updateGodown = /* GraphQL */ `
  mutation UpdateGodown(
    $input: UpdateGodownInput!
    $condition: ModelGodownConditionInput
  ) {
    updateGodown(input: $input, condition: $condition) {
      uuid
      name
      description
      compartments {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        nextToken
      }
      warehouse {
        uuid
        name
        description
        godowns {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWarehousesId
      }
      createdAt
      updatedAt
      warehouseGodownsId
    }
  }
`;
export const deleteGodown = /* GraphQL */ `
  mutation DeleteGodown(
    $input: DeleteGodownInput!
    $condition: ModelGodownConditionInput
  ) {
    deleteGodown(input: $input, condition: $condition) {
      uuid
      name
      description
      compartments {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        nextToken
      }
      warehouse {
        uuid
        name
        description
        godowns {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWarehousesId
      }
      createdAt
      updatedAt
      warehouseGodownsId
    }
  }
`;
export const createCompartment = /* GraphQL */ `
  mutation CreateCompartment(
    $input: CreateCompartmentInput!
    $condition: ModelCompartmentConditionInput
  ) {
    createCompartment(input: $input, condition: $condition) {
      uuid
      name
      description
      stacks {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          compartmentStacksId
        }
        nextToken
      }
      hub {
        uuid
        name
        description
        nodes {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        hubCompartmentId
      }
      godown {
        uuid
        name
        description
        compartments {
          nextToken
        }
        warehouse {
          uuid
          name
          description
          createdAt
          updatedAt
          managerWarehousesId
        }
        createdAt
        updatedAt
        warehouseGodownsId
      }
      createdAt
      updatedAt
      godownCompartmentsId
      compartmentHubId
    }
  }
`;
export const updateCompartment = /* GraphQL */ `
  mutation UpdateCompartment(
    $input: UpdateCompartmentInput!
    $condition: ModelCompartmentConditionInput
  ) {
    updateCompartment(input: $input, condition: $condition) {
      uuid
      name
      description
      stacks {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          compartmentStacksId
        }
        nextToken
      }
      hub {
        uuid
        name
        description
        nodes {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        hubCompartmentId
      }
      godown {
        uuid
        name
        description
        compartments {
          nextToken
        }
        warehouse {
          uuid
          name
          description
          createdAt
          updatedAt
          managerWarehousesId
        }
        createdAt
        updatedAt
        warehouseGodownsId
      }
      createdAt
      updatedAt
      godownCompartmentsId
      compartmentHubId
    }
  }
`;
export const deleteCompartment = /* GraphQL */ `
  mutation DeleteCompartment(
    $input: DeleteCompartmentInput!
    $condition: ModelCompartmentConditionInput
  ) {
    deleteCompartment(input: $input, condition: $condition) {
      uuid
      name
      description
      stacks {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          compartmentStacksId
        }
        nextToken
      }
      hub {
        uuid
        name
        description
        nodes {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        hubCompartmentId
      }
      godown {
        uuid
        name
        description
        compartments {
          nextToken
        }
        warehouse {
          uuid
          name
          description
          createdAt
          updatedAt
          managerWarehousesId
        }
        createdAt
        updatedAt
        warehouseGodownsId
      }
      createdAt
      updatedAt
      godownCompartmentsId
      compartmentHubId
    }
  }
`;
export const createHub = /* GraphQL */ `
  mutation CreateHub(
    $input: CreateHubInput!
    $condition: ModelHubConditionInput
  ) {
    createHub(input: $input, condition: $condition) {
      uuid
      name
      description
      nodes {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      compartment {
        uuid
        name
        description
        stacks {
          nextToken
        }
        hub {
          uuid
          name
          description
          createdAt
          updatedAt
          hubCompartmentId
        }
        godown {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        createdAt
        updatedAt
        godownCompartmentsId
        compartmentHubId
      }
      createdAt
      updatedAt
      hubCompartmentId
    }
  }
`;
export const updateHub = /* GraphQL */ `
  mutation UpdateHub(
    $input: UpdateHubInput!
    $condition: ModelHubConditionInput
  ) {
    updateHub(input: $input, condition: $condition) {
      uuid
      name
      description
      nodes {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      compartment {
        uuid
        name
        description
        stacks {
          nextToken
        }
        hub {
          uuid
          name
          description
          createdAt
          updatedAt
          hubCompartmentId
        }
        godown {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        createdAt
        updatedAt
        godownCompartmentsId
        compartmentHubId
      }
      createdAt
      updatedAt
      hubCompartmentId
    }
  }
`;
export const deleteHub = /* GraphQL */ `
  mutation DeleteHub(
    $input: DeleteHubInput!
    $condition: ModelHubConditionInput
  ) {
    deleteHub(input: $input, condition: $condition) {
      uuid
      name
      description
      nodes {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      compartment {
        uuid
        name
        description
        stacks {
          nextToken
        }
        hub {
          uuid
          name
          description
          createdAt
          updatedAt
          hubCompartmentId
        }
        godown {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        createdAt
        updatedAt
        godownCompartmentsId
        compartmentHubId
      }
      createdAt
      updatedAt
      hubCompartmentId
    }
  }
`;
export const createComodity = /* GraphQL */ `
  mutation CreateComodity(
    $input: CreateComodityInput!
    $condition: ModelComodityConditionInput
  ) {
    createComodity(input: $input, condition: $condition) {
      uuid
      profile
      description
      shelflife
      thresholds
      nodes {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComodity = /* GraphQL */ `
  mutation UpdateComodity(
    $input: UpdateComodityInput!
    $condition: ModelComodityConditionInput
  ) {
    updateComodity(input: $input, condition: $condition) {
      uuid
      profile
      description
      shelflife
      thresholds
      nodes {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComodity = /* GraphQL */ `
  mutation DeleteComodity(
    $input: DeleteComodityInput!
    $condition: ModelComodityConditionInput
  ) {
    deleteComodity(input: $input, condition: $condition) {
      uuid
      profile
      description
      shelflife
      thresholds
      nodes {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    createNode(input: $input, condition: $condition) {
      uuid
      name
      description
      stack {
        uuid
        name
        description
        node {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        compartmentStacksId
      }
      hub {
        uuid
        name
        description
        nodes {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        hubCompartmentId
      }
      comodity {
        uuid
        profile
        description
        shelflife
        thresholds
        nodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      hubNodesId
      comodityNodesId
      stackNodeId
    }
  }
`;
export const updateNode = /* GraphQL */ `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    updateNode(input: $input, condition: $condition) {
      uuid
      name
      description
      stack {
        uuid
        name
        description
        node {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        compartmentStacksId
      }
      hub {
        uuid
        name
        description
        nodes {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        hubCompartmentId
      }
      comodity {
        uuid
        profile
        description
        shelflife
        thresholds
        nodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      hubNodesId
      comodityNodesId
      stackNodeId
    }
  }
`;
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    deleteNode(input: $input, condition: $condition) {
      uuid
      name
      description
      stack {
        uuid
        name
        description
        node {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        compartmentStacksId
      }
      hub {
        uuid
        name
        description
        nodes {
          nextToken
        }
        compartment {
          uuid
          name
          description
          createdAt
          updatedAt
          godownCompartmentsId
          compartmentHubId
        }
        createdAt
        updatedAt
        hubCompartmentId
      }
      comodity {
        uuid
        profile
        description
        shelflife
        thresholds
        nodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      hubNodesId
      comodityNodesId
      stackNodeId
    }
  }
`;
export const createStack = /* GraphQL */ `
  mutation CreateStack(
    $input: CreateStackInput!
    $condition: ModelStackConditionInput
  ) {
    createStack(input: $input, condition: $condition) {
      uuid
      name
      description
      node {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      compartment {
        uuid
        name
        description
        stacks {
          nextToken
        }
        hub {
          uuid
          name
          description
          createdAt
          updatedAt
          hubCompartmentId
        }
        godown {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        createdAt
        updatedAt
        godownCompartmentsId
        compartmentHubId
      }
      createdAt
      updatedAt
      compartmentStacksId
    }
  }
`;
export const updateStack = /* GraphQL */ `
  mutation UpdateStack(
    $input: UpdateStackInput!
    $condition: ModelStackConditionInput
  ) {
    updateStack(input: $input, condition: $condition) {
      uuid
      name
      description
      node {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      compartment {
        uuid
        name
        description
        stacks {
          nextToken
        }
        hub {
          uuid
          name
          description
          createdAt
          updatedAt
          hubCompartmentId
        }
        godown {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        createdAt
        updatedAt
        godownCompartmentsId
        compartmentHubId
      }
      createdAt
      updatedAt
      compartmentStacksId
    }
  }
`;
export const deleteStack = /* GraphQL */ `
  mutation DeleteStack(
    $input: DeleteStackInput!
    $condition: ModelStackConditionInput
  ) {
    deleteStack(input: $input, condition: $condition) {
      uuid
      name
      description
      node {
        items {
          uuid
          name
          description
          createdAt
          updatedAt
          hubNodesId
          comodityNodesId
          stackNodeId
        }
        nextToken
      }
      compartment {
        uuid
        name
        description
        stacks {
          nextToken
        }
        hub {
          uuid
          name
          description
          createdAt
          updatedAt
          hubCompartmentId
        }
        godown {
          uuid
          name
          description
          createdAt
          updatedAt
          warehouseGodownsId
        }
        createdAt
        updatedAt
        godownCompartmentsId
        compartmentHubId
      }
      createdAt
      updatedAt
      compartmentStacksId
    }
  }
`;
export const createHubEntry = /* GraphQL */ `
  mutation CreateHubEntry(
    $input: CreateHubEntryInput!
    $condition: ModelHubEntryConditionInput
  ) {
    createHubEntry(input: $input, condition: $condition) {
      uuid
      hubId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateHubEntry = /* GraphQL */ `
  mutation UpdateHubEntry(
    $input: UpdateHubEntryInput!
    $condition: ModelHubEntryConditionInput
  ) {
    updateHubEntry(input: $input, condition: $condition) {
      uuid
      hubId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteHubEntry = /* GraphQL */ `
  mutation DeleteHubEntry(
    $input: DeleteHubEntryInput!
    $condition: ModelHubEntryConditionInput
  ) {
    deleteHubEntry(input: $input, condition: $condition) {
      uuid
      hubId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const createNodeEntry = /* GraphQL */ `
  mutation CreateNodeEntry(
    $input: CreateNodeEntryInput!
    $condition: ModelNodeEntryConditionInput
  ) {
    createNodeEntry(input: $input, condition: $condition) {
      uuid
      nodeId
      status
      params
      createdAt
      updatedAt
    }
  }
`;
export const updateNodeEntry = /* GraphQL */ `
  mutation UpdateNodeEntry(
    $input: UpdateNodeEntryInput!
    $condition: ModelNodeEntryConditionInput
  ) {
    updateNodeEntry(input: $input, condition: $condition) {
      uuid
      nodeId
      status
      params
      createdAt
      updatedAt
    }
  }
`;
export const deleteNodeEntry = /* GraphQL */ `
  mutation DeleteNodeEntry(
    $input: DeleteNodeEntryInput!
    $condition: ModelNodeEntryConditionInput
  ) {
    deleteNodeEntry(input: $input, condition: $condition) {
      uuid
      nodeId
      status
      params
      createdAt
      updatedAt
    }
  }
`;
export const createWorkerNotifications = /* GraphQL */ `
  mutation CreateWorkerNotifications(
    $input: CreateWorkerNotificationsInput!
    $condition: ModelWorkerNotificationsConditionInput
  ) {
    createWorkerNotifications(input: $input, condition: $condition) {
      id
      workerID
      notificationID
      worker {
        uuid
        profile
        notifications {
          nextToken
        }
        tasks {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWorkersId
      }
      notification {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkerNotifications = /* GraphQL */ `
  mutation UpdateWorkerNotifications(
    $input: UpdateWorkerNotificationsInput!
    $condition: ModelWorkerNotificationsConditionInput
  ) {
    updateWorkerNotifications(input: $input, condition: $condition) {
      id
      workerID
      notificationID
      worker {
        uuid
        profile
        notifications {
          nextToken
        }
        tasks {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWorkersId
      }
      notification {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkerNotifications = /* GraphQL */ `
  mutation DeleteWorkerNotifications(
    $input: DeleteWorkerNotificationsInput!
    $condition: ModelWorkerNotificationsConditionInput
  ) {
    deleteWorkerNotifications(input: $input, condition: $condition) {
      id
      workerID
      notificationID
      worker {
        uuid
        profile
        notifications {
          nextToken
        }
        tasks {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWorkersId
      }
      notification {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorkerTasks = /* GraphQL */ `
  mutation CreateWorkerTasks(
    $input: CreateWorkerTasksInput!
    $condition: ModelWorkerTasksConditionInput
  ) {
    createWorkerTasks(input: $input, condition: $condition) {
      id
      workerID
      taskID
      worker {
        uuid
        profile
        notifications {
          nextToken
        }
        tasks {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWorkersId
      }
      task {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkerTasks = /* GraphQL */ `
  mutation UpdateWorkerTasks(
    $input: UpdateWorkerTasksInput!
    $condition: ModelWorkerTasksConditionInput
  ) {
    updateWorkerTasks(input: $input, condition: $condition) {
      id
      workerID
      taskID
      worker {
        uuid
        profile
        notifications {
          nextToken
        }
        tasks {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWorkersId
      }
      task {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkerTasks = /* GraphQL */ `
  mutation DeleteWorkerTasks(
    $input: DeleteWorkerTasksInput!
    $condition: ModelWorkerTasksConditionInput
  ) {
    deleteWorkerTasks(input: $input, condition: $condition) {
      id
      workerID
      taskID
      worker {
        uuid
        profile
        notifications {
          nextToken
        }
        tasks {
          nextToken
        }
        manager {
          uuid
          profile
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        managerWorkersId
      }
      task {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
