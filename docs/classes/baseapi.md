[@bjerkio/crayon-api - v0.0.0](../README.md) › [BaseAPI](baseapi.md)

# Class: BaseAPI

**`export`** 

**`class`** BaseAPI

## Hierarchy

* **BaseAPI**

  ↳ [ActivityLogsApi](activitylogsapi.md)

  ↳ [AddressesApi](addressesapi.md)

  ↳ [AgreementProductsApi](agreementproductsapi.md)

  ↳ [AgreementReportsApi](agreementreportsapi.md)

  ↳ [AgreementsApi](agreementsapi.md)

  ↳ [AssetsApi](assetsapi.md)

  ↳ [AwsAccountsApi](awsaccountsapi.md)

  ↳ [AzurePlansApi](azureplansapi.md)

  ↳ [BillingCyclesApi](billingcyclesapi.md)

  ↳ [BillingStatementsApi](billingstatementsapi.md)

  ↳ [BlogItemsApi](blogitemsapi.md)

  ↳ [ClientsApi](clientsapi.md)

  ↳ [ConsumersApi](consumersapi.md)

  ↳ [CrayonAccountsApi](crayonaccountsapi.md)

  ↳ [CustomerTenantAgreementsApi](customertenantagreementsapi.md)

  ↳ [CustomerTenantsApi](customertenantsapi.md)

  ↳ [CustomerTokenApi](customertokenapi.md)

  ↳ [FacebookOrdersApi](facebookordersapi.md)

  ↳ [GoogleOrdersApi](googleordersapi.md)

  ↳ [GroupingsApi](groupingsapi.md)

  ↳ [InvoiceProfilesApi](invoiceprofilesapi.md)

  ↳ [ManagementLinksApi](managementlinksapi.md)

  ↳ [MeApi](meapi.md)

  ↳ [OrganizationAccessApi](organizationaccessapi.md)

  ↳ [OrganizationsApi](organizationsapi.md)

  ↳ [PingApi](pingapi.md)

  ↳ [ProductContainersApi](productcontainersapi.md)

  ↳ [ProgramsApi](programsapi.md)

  ↳ [PublishersApi](publishersapi.md)

  ↳ [RegionsApi](regionsapi.md)

  ↳ [ResellerSalesPricesApi](resellersalespricesapi.md)

  ↳ [SecretsApi](secretsapi.md)

  ↳ [SubscriptionsApi](subscriptionsapi.md)

  ↳ [UsageCostApi](usagecostapi.md)

  ↳ [UsersApi](usersapi.md)

## Index

### Constructors

* [constructor](baseapi.md#constructor)

### Properties

* [basePath](baseapi.md#protected-basepath)
* [configuration](baseapi.md#protected-configuration)
* [fetch](baseapi.md#protected-fetch)

## Constructors

###  constructor

\+ **new BaseAPI**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[BaseAPI](baseapi.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[BaseAPI](baseapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*
