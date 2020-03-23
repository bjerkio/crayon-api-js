[@bjerkio/crayon-api - v0.0.0](../README.md) › [OrganizationAccessApi](organizationaccessapi.md)

# Class: OrganizationAccessApi

OrganizationAccessApi - object-oriented interface

**`export`** 

**`class`** OrganizationAccessApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OrganizationAccessApi**

## Index

### Constructors

* [constructor](organizationaccessapi.md#constructor)

### Properties

* [basePath](organizationaccessapi.md#protected-basepath)
* [configuration](organizationaccessapi.md#protected-configuration)
* [fetch](organizationaccessapi.md#protected-fetch)

### Methods

* [get](organizationaccessapi.md#get)
* [getOrganizationAccess](organizationaccessapi.md#getorganizationaccess)
* [put](organizationaccessapi.md#put)

## Constructors

###  constructor

\+ **new OrganizationAccessApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[OrganizationAccessApi](organizationaccessapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[OrganizationAccessApi](organizationaccessapi.md)*

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

▸ **get**(`userId?`: string, `organizationId?`: number, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfOrganizationAccess](../interfaces/apicollectionoforganizationaccess.md)›*

**`throws`** {RequiredError}

**`memberof`** OrganizationAccessApi

**Parameters:**

Name | Type |
------ | ------ |
`userId?` | string |
`organizationId?` | number |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfOrganizationAccess](../interfaces/apicollectionoforganizationaccess.md)›*

___

###  getOrganizationAccess

▸ **getOrganizationAccess**(`userId?`: string, `organizationId?`: number, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfOrganizationAccess](../interfaces/apicollectionoforganizationaccess.md)›*

**`throws`** {RequiredError}

**`memberof`** OrganizationAccessApi

**Parameters:**

Name | Type |
------ | ------ |
`userId?` | string |
`organizationId?` | number |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfOrganizationAccess](../interfaces/apicollectionoforganizationaccess.md)›*

___

###  put

▸ **put**(`list?`: Array‹[OrganizationAccess](../modules/organizationaccess.md)›, `options?`: any): *Promise‹[OrganizationAccess](../modules/organizationaccess.md)[]›*

**`throws`** {RequiredError}

**`memberof`** OrganizationAccessApi

**Parameters:**

Name | Type |
------ | ------ |
`list?` | Array‹[OrganizationAccess](../modules/organizationaccess.md)› |
`options?` | any |

**Returns:** *Promise‹[OrganizationAccess](../modules/organizationaccess.md)[]›*
