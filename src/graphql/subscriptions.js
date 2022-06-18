/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager {
    onCreateManager {
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
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager {
    onUpdateManager {
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
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager {
    onDeleteManager {
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
export const onCreateWorker = /* GraphQL */ `
  subscription OnCreateWorker {
    onCreateWorker {
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
export const onUpdateWorker = /* GraphQL */ `
  subscription OnUpdateWorker {
    onUpdateWorker {
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
export const onDeleteWorker = /* GraphQL */ `
  subscription OnDeleteWorker {
    onDeleteWorker {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse {
    onCreateWarehouse {
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
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse {
    onUpdateWarehouse {
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
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse {
    onDeleteWarehouse {
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
export const onCreateGodown = /* GraphQL */ `
  subscription OnCreateGodown {
    onCreateGodown {
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
export const onUpdateGodown = /* GraphQL */ `
  subscription OnUpdateGodown {
    onUpdateGodown {
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
export const onDeleteGodown = /* GraphQL */ `
  subscription OnDeleteGodown {
    onDeleteGodown {
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
export const onCreateCompartment = /* GraphQL */ `
  subscription OnCreateCompartment {
    onCreateCompartment {
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
export const onUpdateCompartment = /* GraphQL */ `
  subscription OnUpdateCompartment {
    onUpdateCompartment {
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
export const onDeleteCompartment = /* GraphQL */ `
  subscription OnDeleteCompartment {
    onDeleteCompartment {
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
export const onCreateHub = /* GraphQL */ `
  subscription OnCreateHub {
    onCreateHub {
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
export const onUpdateHub = /* GraphQL */ `
  subscription OnUpdateHub {
    onUpdateHub {
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
export const onDeleteHub = /* GraphQL */ `
  subscription OnDeleteHub {
    onDeleteHub {
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
export const onCreateComodity = /* GraphQL */ `
  subscription OnCreateComodity {
    onCreateComodity {
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
export const onUpdateComodity = /* GraphQL */ `
  subscription OnUpdateComodity {
    onUpdateComodity {
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
export const onDeleteComodity = /* GraphQL */ `
  subscription OnDeleteComodity {
    onDeleteComodity {
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
export const onCreateNode = /* GraphQL */ `
  subscription OnCreateNode {
    onCreateNode {
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
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode {
    onUpdateNode {
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
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode {
    onDeleteNode {
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
export const onCreateStack = /* GraphQL */ `
  subscription OnCreateStack {
    onCreateStack {
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
export const onUpdateStack = /* GraphQL */ `
  subscription OnUpdateStack {
    onUpdateStack {
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
export const onDeleteStack = /* GraphQL */ `
  subscription OnDeleteStack {
    onDeleteStack {
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
export const onCreateHubEntry = /* GraphQL */ `
  subscription OnCreateHubEntry {
    onCreateHubEntry {
      uuid
      hubId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHubEntry = /* GraphQL */ `
  subscription OnUpdateHubEntry {
    onUpdateHubEntry {
      uuid
      hubId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHubEntry = /* GraphQL */ `
  subscription OnDeleteHubEntry {
    onDeleteHubEntry {
      uuid
      hubId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNodeEntry = /* GraphQL */ `
  subscription OnCreateNodeEntry {
    onCreateNodeEntry {
      uuid
      nodeId
      status
      params
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNodeEntry = /* GraphQL */ `
  subscription OnUpdateNodeEntry {
    onUpdateNodeEntry {
      uuid
      nodeId
      status
      params
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNodeEntry = /* GraphQL */ `
  subscription OnDeleteNodeEntry {
    onDeleteNodeEntry {
      uuid
      nodeId
      status
      params
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkerNotifications = /* GraphQL */ `
  subscription OnCreateWorkerNotifications {
    onCreateWorkerNotifications {
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
export const onUpdateWorkerNotifications = /* GraphQL */ `
  subscription OnUpdateWorkerNotifications {
    onUpdateWorkerNotifications {
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
export const onDeleteWorkerNotifications = /* GraphQL */ `
  subscription OnDeleteWorkerNotifications {
    onDeleteWorkerNotifications {
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
export const onCreateWorkerTasks = /* GraphQL */ `
  subscription OnCreateWorkerTasks {
    onCreateWorkerTasks {
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
export const onUpdateWorkerTasks = /* GraphQL */ `
  subscription OnUpdateWorkerTasks {
    onUpdateWorkerTasks {
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
export const onDeleteWorkerTasks = /* GraphQL */ `
  subscription OnDeleteWorkerTasks {
    onDeleteWorkerTasks {
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
