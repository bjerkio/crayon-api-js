[@bjerkio/crayon-api - v0.0.0](../README.md) › [OrganizationsApi](organizationsapi.md)

# Class: OrganizationsApi

OrganizationsApi - object-oriented interface

**`export`** 

**`class`** OrganizationsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **OrganizationsApi**

## Index

### Constructors

* [constructor](organizationsapi.md#constructor)

### Properties

* [basePath](organizationsapi.md#protected-basepath)
* [configuration](organizationsapi.md#protected-configuration)
* [fetch](organizationsapi.md#protected-fetch)

### Methods

* [get](organizationsapi.md#get)
* [getById](organizationsapi.md#getbyid)
* [getOrganizationSalesContact](organizationsapi.md#getorganizationsalescontact)
* [hasAccessAsync](organizationsapi.md#hasaccessasync)

## Constructors

###  constructor

\+ **new OrganizationsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[OrganizationsApi](organizationsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[OrganizationsApi](organizationsapi.md)*

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

▸ **get**(`page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfOrganization](../interfaces/apicollectionoforganization.md)›*

**`throws`** {RequiredError}

**`memberof`** OrganizationsApi

**Parameters:**

Name | Type |
------ | ------ |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfOrganization](../interfaces/apicollectionoforganization.md)›*

___

###  getById

▸ **getById**(`id`: number, `options?`: any): *Promise‹[Organization](../interfaces/organization.md)›*

**`throws`** {RequiredError}

**`memberof`** OrganizationsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[Organization](../interfaces/organization.md)›*

___

###  getOrganizationSalesContact

▸ **getOrganizationSalesContact**(`organizationId`: number, `options?`: any): *Promise‹[OrganizationSalesContact](../interfaces/organizationsalescontact.md)›*

**`throws`** {RequiredError}

**`memberof`** OrganizationsApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId` | number |
`options?` | any |

**Returns:** *Promise‹[OrganizationSalesContact](../interfaces/organizationsalescontact.md)›*

___

###  hasAccessAsync

▸ **hasAccessAsync**(`id`: number, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** OrganizationsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹boolean›*
