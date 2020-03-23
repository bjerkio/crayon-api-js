[@bjerkio/crayon-api - v0.0.0](../README.md) › [ClientsApi](clientsapi.md)

# Class: ClientsApi

ClientsApi - object-oriented interface

**`export`** 

**`class`** ClientsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ClientsApi**

## Index

### Constructors

* [constructor](clientsapi.md#constructor)

### Properties

* [basePath](clientsapi.md#protected-basepath)
* [configuration](clientsapi.md#protected-configuration)
* [fetch](clientsapi.md#protected-fetch)

### Methods

* [_delete](clientsapi.md#_delete)
* [get](clientsapi.md#get)
* [getById](clientsapi.md#getbyid)
* [post](clientsapi.md#post)
* [put](clientsapi.md#put)

## Constructors

###  constructor

\+ **new ClientsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ClientsApi](clientsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ClientsApi](clientsapi.md)*

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

###  _delete

▸ **_delete**(`clientId`: string, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** ClientsApi

**Parameters:**

Name | Type |
------ | ------ |
`clientId` | string |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**(`page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfClient](../interfaces/apicollectionofclient.md)›*

**`throws`** {RequiredError}

**`memberof`** ClientsApi

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfClient](../interfaces/apicollectionofclient.md)›*

___

###  getById

▸ **getById**(`clientId`: string, `options?`: any): *Promise‹[Client](../modules/client.md)›*

**`throws`** {RequiredError}

**`memberof`** ClientsApi

**Parameters:**

Name | Type |
------ | ------ |
`clientId` | string |
`options?` | any |

**Returns:** *Promise‹[Client](../modules/client.md)›*

___

###  post

▸ **post**(`client?`: [Client](../modules/client.md), `options?`: any): *Promise‹[Client](../modules/client.md)›*

**`throws`** {RequiredError}

**`memberof`** ClientsApi

**Parameters:**

Name | Type |
------ | ------ |
`client?` | [Client](../modules/client.md) |
`options?` | any |

**Returns:** *Promise‹[Client](../modules/client.md)›*

___

###  put

▸ **put**(`clientId`: string, `client?`: [Client](../modules/client.md), `options?`: any): *Promise‹[Client](../modules/client.md)›*

**`throws`** {RequiredError}

**`memberof`** ClientsApi

**Parameters:**

Name | Type |
------ | ------ |
`clientId` | string |
`client?` | [Client](../modules/client.md) |
`options?` | any |

**Returns:** *Promise‹[Client](../modules/client.md)›*
