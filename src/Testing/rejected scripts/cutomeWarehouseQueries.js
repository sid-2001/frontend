/**
 * @summary Get list of godowns in a warehouse.
 * @returns data.getWarehouse.godowns.items
 */
export const listGodowns = `
    query listGodowns($uuid: ID!) {
        getWarehouse(uuid: $uuid) {
            godowns {
                items {
                uuid
                name
                description
                }
            }
        }
    }
`;


/**
 * @summary Get list of compartments in a warehouse.
 * @returns data.getWarehouse.godowns.items.compartments.items
 */
export const listCompartments = `
    query listCompartments($uuid: ID!) {
        getWarehouse(uuid: $uuid) {
        godowns {
            items {
            compartments {
                items {
                uuid
                name
                description
                }
            }
            }
        }
        }
    }  
`;


/**
 * @summary Get list of stacks in a Warehouse.
 * @returns data.getWarehouse.godowns.items.compartments.items.stacks.items
 */
export const listStacks = `
    query listStacks($uuid: ID!) {
        getWarehouse(uuid: $uuid) {
        godowns {
            items {
            compartments {
                items {
                stacks {
                    items {
                    uuid
                    name
                    description
                    }
                }
                }
            }
            }
        }
        }
    }  
`;


/**
 * @summary Get list of nodes in a Warehouse.
 * @returns data.getWarehouse.godowns.items.compartments.items.stacks.items.node.items
 */
export const listNodes = `
    query listNodes($uuid: ID!) {
        getWarehouse(uuid: $uuid) {
        godowns {
            items {
            compartments {
                items {
                stacks {
                    items {
                    node {
                        items {
                        uuid
                        name
                        description
                        }
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
`;


/**
 * @summary Get list of hubs in a Warehouse.
 * @returns data.getWarehouse.godowns.items.compartments.items.hub
 */
// export const listHubs = `
//     query listHubs($uuid: ID!) {
//         getWarehouse(uuid: $uuid) {
//         godowns {
//             items {
//             compartments {
//                 items {
//                 hub {
//                     uuid
//                     name
//                     description
//                 }
//                 }
//             }
//             }
//         }
//         }
//     }
// `;