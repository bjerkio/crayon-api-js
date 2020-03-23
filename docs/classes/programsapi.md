[@bjerkio/crayon-api - v0.0.0](../README.md) › [ProgramsApi](programsapi.md)

# Class: ProgramsApi

ProgramsApi - object-oriented interface

**`export`** 

**`class`** ProgramsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ProgramsApi**

## Index

### Constructors

* [constructor](programsapi.md#constructor)

### Properties

* [basePath](programsapi.md#protected-basepath)
* [configuration](programsapi.md#protected-configuration)
* [fetch](programsapi.md#protected-fetch)

### Methods

* [get](programsapi.md#get)
* [getById](programsapi.md#getbyid)

## Constructors

###  constructor

\+ **new ProgramsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ProgramsApi](programsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ProgramsApi](programsapi.md)*

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

▸ **get**(`publisherId?`: number, `programType?`: string, `page?`: number, `pageSize?`: number, `search?`: string, `organizationId?`: number, `options?`: any): *Promise‹[ApiCollectionOfProgram](../interfaces/apicollectionofprogram.md)›*

**`throws`** {RequiredError}

**`memberof`** ProgramsApi

**Parameters:**

Name | Type |
------ | ------ |
`publisherId?` | number |
`programType?` | string |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`organizationId?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfProgram](../interfaces/apicollectionofprogram.md)›*

___

###  getById

▸ **getById**(`id`: number, `options?`: any): *Promise‹[Program](../interfaces/program.md)›*

**`throws`** {RequiredError}

**`memberof`** ProgramsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[Program](../interfaces/program.md)›*
