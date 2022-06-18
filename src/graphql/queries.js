/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getManager = /* GraphQL */ `
  query GetManager($uuid: ID!) {
    getManager(uuid: $uuid) {
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
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $uuid: ID
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listManagers(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getWorker = /* GraphQL */ `
  query GetWorker($uuid: ID!) {
    getWorker(uuid: $uuid) {
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
export const listWorkers = /* GraphQL */ `
  query ListWorkers(
    $uuid: ID
    $filter: ModelWorkerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkers(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($uuid: ID!) {
    getNotification(uuid: $uuid) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $uuid: ID
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNotifications(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($uuid: ID!) {
    getTask(uuid: $uuid) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $uuid: ID
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTasks(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uuid
        description
        wokers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWarehouse = /* GraphQL */ `
  query GetWarehouse($uuid: ID!) {
    getWarehouse(uuid: $uuid) {
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
export const listWarehouses = /* GraphQL */ `
  query ListWarehouses(
    $uuid: ID
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWarehouses(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGodown = /* GraphQL */ `
  query GetGodown($uuid: ID!) {
    getGodown(uuid: $uuid) {
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
export const listGodowns = /* GraphQL */ `
  query ListGodowns(
    $uuid: ID
    $filter: ModelGodownFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGodowns(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCompartment = /* GraphQL */ `
  query GetCompartment($uuid: ID!) {
    getCompartment(uuid: $uuid) {
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
export const listCompartments = /* GraphQL */ `
  query ListCompartments(
    $uuid: ID
    $filter: ModelCompartmentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompartments(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getHub = /* GraphQL */ `
  query GetHub($uuid: ID!) {
    getHub(uuid: $uuid) {
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
export const listHubs = /* GraphQL */ `
  query ListHubs(
    $uuid: ID
    $filter: ModelHubFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHubs(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getComodity = /* GraphQL */ `
  query GetComodity($uuid: ID!) {
    getComodity(uuid: $uuid) {
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
export const listComodities = /* GraphQL */ `
  query ListComodities(
    $uuid: ID
    $filter: ModelComodityFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComodities(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getNode = /* GraphQL */ `
  query GetNode($uuid: ID!) {
    getNode(uuid: $uuid) {
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
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $uuid: ID
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNodes(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uuid
        name
        description
        stack {
          uuid
          name
          description
          createdAt
          updatedAt
          compartmentStacksId
        }
        hub {
          uuid
          name
          description
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        hubNodesId
        comodityNodesId
        stackNodeId
      }
      nextToken
    }
  }
`;
export const getStack = /* GraphQL */ `
  query GetStack($uuid: ID!) {
    getStack(uuid: $uuid) {
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
export const listStacks = /* GraphQL */ `
  query ListStacks(
    $uuid: ID
    $filter: ModelStackFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStacks(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getHubEntry = /* GraphQL */ `
  query GetHubEntry($uuid: ID!) {
    getHubEntry(uuid: $uuid) {
      uuid
      hubId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const listHubEntries = /* GraphQL */ `
  query ListHubEntries(
    $uuid: ID
    $filter: ModelHubEntryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHubEntries(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uuid
        hubId
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNodeEntry = /* GraphQL */ `
  query GetNodeEntry($uuid: ID!) {
    getNodeEntry(uuid: $uuid) {
      uuid
      nodeId
      status
      params
      createdAt
      updatedAt
    }
  }
`;
export const listNodeEntries = /* GraphQL */ `
  query ListNodeEntries(
    $uuid: ID
    $filter: ModelNodeEntryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNodeEntries(
      uuid: $uuid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uuid
        nodeId
        status
        params
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkerNotifications = /* GraphQL */ `
  query GetWorkerNotifications($id: ID!) {
    getWorkerNotifications(id: $id) {
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
export const listWorkerNotifications = /* GraphQL */ `
  query ListWorkerNotifications(
    $filter: ModelWorkerNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkerNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        workerID
        notificationID
        worker {
          uuid
          profile
          createdAt
          updatedAt
          managerWorkersId
        }
        notification {
          uuid
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkerTasks = /* GraphQL */ `
  query GetWorkerTasks($id: ID!) {
    getWorkerTasks(id: $id) {
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
export const listWorkerTasks = /* GraphQL */ `
  query ListWorkerTasks(
    $filter: ModelWorkerTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkerTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workerID
        taskID
        worker {
          uuid
          profile
          createdAt
          updatedAt
          managerWorkersId
        }
        task {
          uuid
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
