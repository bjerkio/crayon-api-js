[@bjerkio/crayon-api - v0.0.0](../README.md) › [InvoiceProfilesApi](invoiceprofilesapi.md)

# Class: InvoiceProfilesApi

InvoiceProfilesApi - object-oriented interface

**`export`** 

**`class`** InvoiceProfilesApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **InvoiceProfilesApi**

## Index

### Constructors

* [constructor](invoiceprofilesapi.md#constructor)

### Properties

* [basePath](invoiceprofilesapi.md#protected-basepath)
* [configuration](invoiceprofilesapi.md#protected-configuration)
* [fetch](invoiceprofilesapi.md#protected-fetch)

### Methods

* [_delete](invoiceprofilesapi.md#_delete)
* [get](invoiceprofilesapi.md#get)
* [getById](invoiceprofilesapi.md#getbyid)
* [post](invoiceprofilesapi.md#post)
* [put](invoiceprofilesapi.md#put)

## Constructors

###  constructor

\+ **new InvoiceProfilesApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[InvoiceProfilesApi](invoiceprofilesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[InvoiceProfilesApi](invoiceprofilesapi.md)*

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

▸ **_delete**(`id`: number, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** InvoiceProfilesApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**(`organizationId?`: number, `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfInvoiceProfile](../interfaces/apicollectionofinvoiceprofile.md)›*

**`throws`** {RequiredError}

**`memberof`** InvoiceProfilesApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfInvoiceProfile](../interfaces/apicollectionofinvoiceprofile.md)›*

___

###  getById

▸ **getById**(`id`: number, `options?`: any): *Promise‹[InvoiceProfile](../interfaces/invoiceprofile.md)›*

**`throws`** {RequiredError}

**`memberof`** InvoiceProfilesApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[InvoiceProfile](../interfaces/invoiceprofile.md)›*

___

###  post

▸ **post**(`invoiceProfile?`: [InvoiceProfile](../interfaces/invoiceprofile.md), `options?`: any): *Promise‹[InvoiceProfile](../interfaces/invoiceprofile.md)›*

**`throws`** {RequiredError}

**`memberof`** InvoiceProfilesApi

**Parameters:**

Name | Type |
------ | ------ |
`invoiceProfile?` | [InvoiceProfile](../interfaces/invoiceprofile.md) |
`options?` | any |

**Returns:** *Promise‹[InvoiceProfile](../interfaces/invoiceprofile.md)›*

___

###  put

▸ **put**(`id`: number, `invoiceProfile?`: [InvoiceProfile](../interfaces/invoiceprofile.md), `options?`: any): *Promise‹[InvoiceProfile](../interfaces/invoiceprofile.md)›*

**`throws`** {RequiredError}

**`memberof`** InvoiceProfilesApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`invoiceProfile?` | [InvoiceProfile](../interfaces/invoiceprofile.md) |
`options?` | any |

**Returns:** *Promise‹[InvoiceProfile](../interfaces/invoiceprofile.md)›*
