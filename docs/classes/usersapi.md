[@bjerkio/crayon-api - v0.0.0](../README.md) › [UsersApi](usersapi.md)

# Class: UsersApi

UsersApi - object-oriented interface

**`export`** 

**`class`** UsersApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **UsersApi**

## Index

### Constructors

* [constructor](usersapi.md#constructor)

### Properties

* [basePath](usersapi.md#protected-basepath)
* [configuration](usersapi.md#protected-configuration)
* [fetch](usersapi.md#protected-fetch)

### Methods

* [addUser](usersapi.md#adduser)
* [changePassword](usersapi.md#changepassword)
* [deleteUser](usersapi.md#deleteuser)
* [get](usersapi.md#get)
* [getUserById](usersapi.md#getuserbyid)
* [getUserByUserName](usersapi.md#getuserbyusername)
* [updateUser](usersapi.md#updateuser)

## Constructors

###  constructor

\+ **new UsersApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[UsersApi](usersapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[UsersApi](usersapi.md)*

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

###  addUser

▸ **addUser**(`user?`: [User](../interfaces/user.md), `options?`: any): *Promise‹[User](../interfaces/user.md)›*

**`throws`** {RequiredError}

**`memberof`** UsersApi

**Parameters:**

Name | Type |
------ | ------ |
`user?` | [User](../interfaces/user.md) |
`options?` | any |

**Returns:** *Promise‹[User](../interfaces/user.md)›*

___

###  changePassword

▸ **changePassword**(`id`: string, `changePassword?`: [UserChangePassword](../interfaces/userchangepassword.md), `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** UsersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`changePassword?` | [UserChangePassword](../interfaces/userchangepassword.md) |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  deleteUser

▸ **deleteUser**(`id`: string, `options?`: any): *Promise‹boolean›*

**`throws`** {RequiredError}

**`memberof`** UsersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`options?` | any |

**Returns:** *Promise‹boolean›*

___

###  get

▸ **get**(`search?`: string, `organizationId?`: number, `role?`: "None" | "User" | "TenantAdmin", `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfUser](../interfaces/apicollectionofuser.md)›*

**`throws`** {RequiredError}

**`memberof`** UsersApi

**Parameters:**

Name | Type |
------ | ------ |
`search?` | string |
`organizationId?` | number |
`role?` | "None" &#124; "User" &#124; "TenantAdmin" |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfUser](../interfaces/apicollectionofuser.md)›*

___

###  getUserById

▸ **getUserById**(`id`: string, `options?`: any): *Promise‹[User](../interfaces/user.md)›*

**`throws`** {RequiredError}

**`memberof`** UsersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`options?` | any |

**Returns:** *Promise‹[User](../interfaces/user.md)›*

___

###  getUserByUserName

▸ **getUserByUserName**(`userName?`: string, `options?`: any): *Promise‹[User](../interfaces/user.md)›*

**`throws`** {RequiredError}

**`memberof`** UsersApi

**Parameters:**

Name | Type |
------ | ------ |
`userName?` | string |
`options?` | any |

**Returns:** *Promise‹[User](../interfaces/user.md)›*

___

###  updateUser

▸ **updateUser**(`id`: string, `user?`: [User](../interfaces/user.md), `options?`: any): *Promise‹[User](../interfaces/user.md)›*

**`throws`** {RequiredError}

**`memberof`** UsersApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`user?` | [User](../interfaces/user.md) |
`options?` | any |

**Returns:** *Promise‹[User](../interfaces/user.md)›*
