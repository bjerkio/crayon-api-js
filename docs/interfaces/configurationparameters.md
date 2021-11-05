[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ConfigurationParameters

# Interface: ConfigurationParameters

## Table of contents

### Properties

- [accessToken](ConfigurationParameters.md#accesstoken)
- [apiKey](ConfigurationParameters.md#apikey)
- [basePath](ConfigurationParameters.md#basepath)
- [credentials](ConfigurationParameters.md#credentials)
- [fetchApi](ConfigurationParameters.md#fetchapi)
- [headers](ConfigurationParameters.md#headers)
- [middleware](ConfigurationParameters.md#middleware)
- [password](ConfigurationParameters.md#password)
- [username](ConfigurationParameters.md#username)

### Methods

- [queryParamsStringify](ConfigurationParameters.md#queryparamsstringify)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| `Promise`<`string`\>

#### Defined in

[src/runtime.ts:140](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L140)

___

### apiKey

• `Optional` **apiKey**: `string` \| (`name`: `string`) => `string`

#### Defined in

[src/runtime.ts:139](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L139)

___

### basePath

• `Optional` **basePath**: `string`

#### Defined in

[src/runtime.ts:133](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L133)

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

#### Defined in

[src/runtime.ts:142](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L142)

___

### fetchApi

• `Optional` **fetchApi**: `any`

#### Defined in

[src/runtime.ts:134](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L134)

___

### headers

• `Optional` **headers**: [`HTTPHeaders`](../modules.md#httpheaders)

#### Defined in

[src/runtime.ts:141](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L141)

___

### middleware

• `Optional` **middleware**: [`Middleware`](Middleware.md)[]

#### Defined in

[src/runtime.ts:135](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L135)

___

### password

• `Optional` **password**: `string`

#### Defined in

[src/runtime.ts:138](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L138)

___

### username

• `Optional` **username**: `string`

#### Defined in

[src/runtime.ts:137](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L137)

## Methods

### queryParamsStringify

▸ `Optional` **queryParamsStringify**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../modules.md#httpquery) |

#### Returns

`string`

#### Defined in

[src/runtime.ts:136](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L136)
