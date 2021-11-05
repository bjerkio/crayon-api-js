[@bjerkio/crayon-api - v0.0.0](../README.md) › [AddressesApi](addressesapi.md)

# Class: AddressesApi

AddressesApi - object-oriented interface

**`export`** 

**`class`** AddressesApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AddressesApi**

## Index

### Constructors

* [constructor](addressesapi.md#constructor)

### Properties

* [basePath](addressesapi.md#protected-basepath)
* [configuration](addressesapi.md#protected-configuration)
* [fetch](addressesapi.md#protected-fetch)

### Methods

* [get](addressesapi.md#get)
* [getById](addressesapi.md#getbyid)

## Constructors

###  constructor

\+ **new AddressesApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AddressesApi](addressesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AddressesApi](addressesapi.md)*

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

▸ **get**(`organizationId`: number, `type?`: "None" | "Invoice" | "Delivery", `options?`: any): *Promise‹[ApiCollectionOfAddress](../interfaces/apicollectionofaddress.md)›*

**`throws`** {RequiredError}

**`memberof`** AddressesApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId` | number |
`type?` | "None" &#124; "Invoice" &#124; "Delivery" |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfAddress](../interfaces/apicollectionofaddress.md)›*

___

###  getById

▸ **getById**(`organizationId`: number, `id`: number, `options?`: any): *Promise‹[Address](../modules/address.md)›*

**`throws`** {RequiredError}

**`memberof`** AddressesApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId` | number |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[Address](../modules/address.md)›*
