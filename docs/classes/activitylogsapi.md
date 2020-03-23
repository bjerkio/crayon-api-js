[@bjerkio/crayon-api - v0.0.0](../README.md) › [ActivityLogsApi](activitylogsapi.md)

# Class: ActivityLogsApi

ActivityLogsApi - object-oriented interface

**`export`** 

**`class`** ActivityLogsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ActivityLogsApi**

## Index

### Constructors

* [constructor](activitylogsapi.md#constructor)

### Properties

* [basePath](activitylogsapi.md#protected-basepath)
* [configuration](activitylogsapi.md#protected-configuration)
* [fetch](activitylogsapi.md#protected-fetch)

### Methods

* [get](activitylogsapi.md#get)

## Constructors

###  constructor

\+ **new ActivityLogsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ActivityLogsApi](activitylogsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ActivityLogsApi](activitylogsapi.md)*

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

▸ **get**(`entity?`: string, `id?`: number, `ids?`: Array‹number›, `searchDate?`: Date, `from?`: Date, `to?`: Date, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ActivityLog](../interfaces/activitylog.md)›*

**`throws`** {RequiredError}

**`memberof`** ActivityLogsApi

**Parameters:**

Name | Type |
------ | ------ |
`entity?` | string |
`id?` | number |
`ids?` | Array‹number› |
`searchDate?` | Date |
`from?` | Date |
`to?` | Date |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ActivityLog](../interfaces/activitylog.md)›*
