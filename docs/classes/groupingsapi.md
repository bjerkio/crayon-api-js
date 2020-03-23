[@bjerkio/crayon-api - v0.0.0](../README.md) › [GroupingsApi](groupingsapi.md)

# Class: GroupingsApi

GroupingsApi - object-oriented interface

**`export`** 

**`class`** GroupingsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **GroupingsApi**

## Index

### Constructors

* [constructor](groupingsapi.md#constructor)

### Properties

* [basePath](groupingsapi.md#protected-basepath)
* [configuration](groupingsapi.md#protected-configuration)
* [fetch](groupingsapi.md#protected-fetch)

### Methods

* [_delete](groupingsapi.md#_delete)
* [get](groupingsapi.md#get)
* [getById](groupingsapi.md#getbyid)
* [post](groupingsapi.md#post)
* [put](groupingsapi.md#put)

## Constructors

###  constructor

\+ **new GroupingsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[GroupingsApi](groupingsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[GroupingsApi](groupingsapi.md)*

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

▸ **_delete**(`id`: number, `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** GroupingsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  get

▸ **get**(`organizationId?`: number, `includeRemoved?`: boolean, `search?`: string, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfGrouping](../interfaces/apicollectionofgrouping.md)›*

**`throws`** {RequiredError}

**`memberof`** GroupingsApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`includeRemoved?` | boolean |
`search?` | string |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfGrouping](../interfaces/apicollectionofgrouping.md)›*

___

###  getById

▸ **getById**(`id`: number, `options?`: any): *Promise‹[Grouping](../interfaces/grouping.md)›*

**`throws`** {RequiredError}

**`memberof`** GroupingsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[Grouping](../interfaces/grouping.md)›*

___

###  post

▸ **post**(`grouping?`: [Grouping](../interfaces/grouping.md), `options?`: any): *Promise‹[Grouping](../interfaces/grouping.md)›*

**`throws`** {RequiredError}

**`memberof`** GroupingsApi

**Parameters:**

Name | Type |
------ | ------ |
`grouping?` | [Grouping](../interfaces/grouping.md) |
`options?` | any |

**Returns:** *Promise‹[Grouping](../interfaces/grouping.md)›*

___

###  put

▸ **put**(`id`: number, `grouping?`: [Grouping](../interfaces/grouping.md), `options?`: any): *Promise‹[Grouping](../interfaces/grouping.md)›*

**`throws`** {RequiredError}

**`memberof`** GroupingsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`grouping?` | [Grouping](../interfaces/grouping.md) |
`options?` | any |

**Returns:** *Promise‹[Grouping](../interfaces/grouping.md)›*
