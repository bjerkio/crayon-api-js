[@bjerkio/crayon-api - v0.0.0](../README.md) › [Configuration](configuration.md)

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](configuration.md#constructor)

### Properties

* [accessToken](configuration.md#optional-accesstoken)
* [apiKey](configuration.md#optional-apikey)
* [basePath](configuration.md#optional-basepath)
* [password](configuration.md#optional-password)
* [username](configuration.md#optional-username)

## Constructors

###  constructor

\+ **new Configuration**(`param`: [ConfigurationParameters](../interfaces/configurationparameters.md)): *[Configuration](configuration.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`param` | [ConfigurationParameters](../interfaces/configurationparameters.md) |  {} |

**Returns:** *[Configuration](configuration.md)*

## Properties

### `Optional` accessToken

• **accessToken**? : *string | function*

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

___

### `Optional` apiKey

• **apiKey**? : *string | function*

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

___

### `Optional` basePath

• **basePath**? : *string*

override base path

**`type`** {string}

**`memberof`** Configuration

___

### `Optional` password

• **password**? : *string*

parameter for basic security

**`type`** {string}

**`memberof`** Configuration

___

### `Optional` username

• **username**? : *string*

parameter for basic security

**`type`** {string}

**`memberof`** Configuration
