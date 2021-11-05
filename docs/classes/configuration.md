[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Accessors

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [basePath](Configuration.md#basepath)
- [credentials](Configuration.md#credentials)
- [fetchApi](Configuration.md#fetchapi)
- [headers](Configuration.md#headers)
- [middleware](Configuration.md#middleware)
- [password](Configuration.md#password)
- [queryParamsStringify](Configuration.md#queryparamsstringify)
- [username](Configuration.md#username)

## Constructors

### constructor

• **new Configuration**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

#### Defined in

[src/runtime.ts:146](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L146)

## Accessors

### accessToken

• `get` **accessToken**(): (`name?`: `string`, `scopes?`: `string`[]) => `string` \| `Promise`<`string`\>

#### Returns

`fn`

▸ (`name?`, `scopes?`): `string` \| `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `scopes?` | `string`[] |

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/runtime.ts:180](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L180)

___

### apiKey

• `get` **apiKey**(): (`name`: `string`) => `string`

#### Returns

`fn`

▸ (`name`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`string`

#### Defined in

[src/runtime.ts:172](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L172)

___

### basePath

• `get` **basePath**(): `string`

#### Returns

`string`

#### Defined in

[src/runtime.ts:148](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L148)

___

### credentials

• `get` **credentials**(): `RequestCredentials`

#### Returns

`RequestCredentials`

#### Defined in

[src/runtime.ts:192](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L192)

___

### fetchApi

• `get` **fetchApi**(): `any`

#### Returns

`any`

#### Defined in

[src/runtime.ts:152](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L152)

___

### headers

• `get` **headers**(): [`HTTPHeaders`](../modules.md#httpheaders)

#### Returns

[`HTTPHeaders`](../modules.md#httpheaders)

#### Defined in

[src/runtime.ts:188](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L188)

___

### middleware

• `get` **middleware**(): [`Middleware`](../interfaces/Middleware.md)[]

#### Returns

[`Middleware`](../interfaces/Middleware.md)[]

#### Defined in

[src/runtime.ts:156](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L156)

___

### password

• `get` **password**(): `string`

#### Returns

`string`

#### Defined in

[src/runtime.ts:168](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L168)

___

### queryParamsStringify

• `get` **queryParamsStringify**(): (`params`: [`HTTPQuery`](../modules.md#httpquery)) => `string`

#### Returns

`fn`

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../modules.md#httpquery) |

##### Returns

`string`

#### Defined in

[src/runtime.ts:160](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L160)

___

### username

• `get` **username**(): `string`

#### Returns

`string`

#### Defined in

[src/runtime.ts:164](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L164)
