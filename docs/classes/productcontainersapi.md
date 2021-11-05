[@bjerkio/crayon-api - v0.0.0](../README.md) › [ProductContainersApi](productcontainersapi.md)

# Class: ProductContainersApi

ProductContainersApi - object-oriented interface

**`export`** 

**`class`** ProductContainersApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **ProductContainersApi**

## Index

### Constructors

* [constructor](productcontainersapi.md#constructor)

### Properties

* [basePath](productcontainersapi.md#protected-basepath)
* [configuration](productcontainersapi.md#protected-configuration)
* [fetch](productcontainersapi.md#protected-fetch)

### Methods

* [createReportAsync](productcontainersapi.md#createreportasync)
* [deleteProductContainer](productcontainersapi.md#deleteproductcontainer)
* [get](productcontainersapi.md#get)
* [getById](productcontainersapi.md#getbyid)
* [getByIdWithRowIssues](productcontainersapi.md#getbyidwithrowissues)
* [getOrCreateShoppingCart](productcontainersapi.md#getorcreateshoppingcart)
* [patchProductRow](productcontainersapi.md#patchproductrow)
* [put](productcontainersapi.md#put)

## Constructors

###  constructor

\+ **new ProductContainersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[ProductContainersApi](productcontainersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[ProductContainersApi](productcontainersapi.md)*

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

###  createReportAsync

▸ **createReportAsync**(`year?`: number, `month?`: number, `programId?`: number, `organizationId?`: number, `copyLast?`: boolean, `options?`: any): *Promise‹[ProductContainer](../modules/productcontainer.md)›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`year?` | number |
`month?` | number |
`programId?` | number |
`organizationId?` | number |
`copyLast?` | boolean |
`options?` | any |

**Returns:** *Promise‹[ProductContainer](../modules/productcontainer.md)›*

___

###  deleteProductContainer

▸ **deleteProductContainer**(`id`: number, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**(`organizationId?`: number, `search?`: string, `page?`: number, `pageSize?`: number, `activeDraft?`: boolean, `programId?`: number, `year?`: number, `month?`: number, `userId?`: string, `sentByUserId?`: string, `type?`: "None" | "Draft" | "Request" | "Order" | "Quote" | "Template", `category?`: "None" | "Seat" | "Report", `from?`: Date, `to?`: Date, `includeRemoved?`: boolean, `includeSubsidiaries?`: boolean, `options?`: any): *Promise‹[ApiCollectionOfProductContainer](../interfaces/apicollectionofproductcontainer.md)›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`search?` | string |
`page?` | number |
`pageSize?` | number |
`activeDraft?` | boolean |
`programId?` | number |
`year?` | number |
`month?` | number |
`userId?` | string |
`sentByUserId?` | string |
`type?` | "None" &#124; "Draft" &#124; "Request" &#124; "Order" &#124; "Quote" &#124; "Template" |
`category?` | "None" &#124; "Seat" &#124; "Report" |
`from?` | Date |
`to?` | Date |
`includeRemoved?` | boolean |
`includeSubsidiaries?` | boolean |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfProductContainer](../interfaces/apicollectionofproductcontainer.md)›*

___

###  getById

▸ **getById**(`id`: number, `options?`: any): *Promise‹[ProductContainer](../modules/productcontainer.md)›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[ProductContainer](../modules/productcontainer.md)›*

___

###  getByIdWithRowIssues

▸ **getByIdWithRowIssues**(`id`: number, `options?`: any): *Promise‹[ProductContainer](../modules/productcontainer.md)›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[ProductContainer](../modules/productcontainer.md)›*

___

###  getOrCreateShoppingCart

▸ **getOrCreateShoppingCart**(`organizationId?`: number, `options?`: any): *Promise‹[ProductContainer](../modules/productcontainer.md)›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`options?` | any |

**Returns:** *Promise‹[ProductContainer](../modules/productcontainer.md)›*

___

###  patchProductRow

▸ **patchProductRow**(`productContainerId`: number, `productRowId`: number, `productRowPatch?`: [ProductRowPatch](../interfaces/productrowpatch.md), `options?`: any): *Promise‹[ProductContainer](../modules/productcontainer.md)›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`productContainerId` | number |
`productRowId` | number |
`productRowPatch?` | [ProductRowPatch](../interfaces/productrowpatch.md) |
`options?` | any |

**Returns:** *Promise‹[ProductContainer](../modules/productcontainer.md)›*

___

###  put

▸ **put**(`id`: number, `productContainer?`: [ProductContainer](../modules/productcontainer.md), `requireEulaAnalysis?`: boolean, `options?`: any): *Promise‹[ProductContainer](../modules/productcontainer.md)›*

**`throws`** {RequiredError}

**`memberof`** ProductContainersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`productContainer?` | [ProductContainer](../modules/productcontainer.md) |
`requireEulaAnalysis?` | boolean |
`options?` | any |

**Returns:** *Promise‹[ProductContainer](../modules/productcontainer.md)›*
