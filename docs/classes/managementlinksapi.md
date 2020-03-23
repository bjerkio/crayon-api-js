[@bjerkio/crayon-api - v0.0.0](../README.md) › [ManagementLinksApi](managementlinksapi.md)

# Class: ManagementLinksApi

ManagementLinksApi - object-oriented interface

**`export`** 

**`class`** ManagementLinksApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ManagementLinksApi**

## Index

### Constructors

* [constructor](managementlinksapi.md#constructor)

### Properties

* [basePath](managementlinksapi.md#protected-basepath)
* [configuration](managementlinksapi.md#protected-configuration)
* [fetch](managementlinksapi.md#protected-fetch)

### Methods

* [get](managementlinksapi.md#get)
* [getGrouped](managementlinksapi.md#getgrouped)

## Constructors

###  constructor

\+ **new ManagementLinksApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ManagementLinksApi](managementlinksapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ManagementLinksApi](managementlinksapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

## Methods

###  get

▸ **get**(`subscriptionIds?`: Array‹number›, `resellerCustomerIds?`: Array‹number›, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfManagementLink](../interfaces/apicollectionofmanagementlink.md)›*

**`throws`** {RequiredError}

**`memberof`** ManagementLinksApi

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionIds?` | Array‹number› |
`resellerCustomerIds?` | Array‹number› |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfManagementLink](../interfaces/apicollectionofmanagementlink.md)›*

___

###  getGrouped

▸ **getGrouped**(`subscriptionIds?`: Array‹number›, `resellerCustomerIds?`: Array‹number›, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfManagementLinkGrouped](../interfaces/apicollectionofmanagementlinkgrouped.md)›*

**`throws`** {RequiredError}

**`memberof`** ManagementLinksApi

**Parameters:**

Name | Type |
------ | ------ |
`subscriptionIds?` | Array‹number› |
`resellerCustomerIds?` | Array‹number› |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfManagementLinkGrouped](../interfaces/apicollectionofmanagementlinkgrouped.md)›*
