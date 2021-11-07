/* tslint:disable */
/* eslint-disable */
/**
 * Crayon Group Customer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AgreementTypeConsent,
    AgreementTypeConsentFromJSON,
    AgreementTypeConsentToJSON,
    ServiceAccountAgreement,
    ServiceAccountAgreementFromJSON,
    ServiceAccountAgreementToJSON,
} from '../models';

export interface CreateCustomerTenantAgreementsRequest {
    customerTenantId: number;
    serviceAccountAgreement?: ServiceAccountAgreement;
}

export interface ListCustomerTenantAgreementsRequest {
    customerTenantId: number;
    agreementTypeConsent?: AgreementTypeConsent;
}

/**
 * 
 */
export class CustomerTenantAgreementsApi extends runtime.BaseAPI {

    /**
     */
    async createCustomerTenantAgreementsRaw(requestParameters: CreateCustomerTenantAgreementsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ServiceAccountAgreement>> {
        if (requestParameters.customerTenantId === null || requestParameters.customerTenantId === undefined) {
            throw new runtime.RequiredError('customerTenantId','Required parameter requestParameters.customerTenantId was null or undefined when calling createCustomerTenantAgreements.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customertenants/{customerTenantId}/agreements`.replace(`{${"customerTenantId"}}`, encodeURIComponent(String(requestParameters.customerTenantId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ServiceAccountAgreementToJSON(requestParameters.serviceAccountAgreement),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceAccountAgreementFromJSON(jsonValue));
    }

    /**
     */
    async createCustomerTenantAgreements(requestParameters: CreateCustomerTenantAgreementsRequest, initOverrides?: RequestInit): Promise<ServiceAccountAgreement> {
        const response = await this.createCustomerTenantAgreementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listCustomerTenantAgreementsRaw(requestParameters: ListCustomerTenantAgreementsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ServiceAccountAgreement>>> {
        if (requestParameters.customerTenantId === null || requestParameters.customerTenantId === undefined) {
            throw new runtime.RequiredError('customerTenantId','Required parameter requestParameters.customerTenantId was null or undefined when calling listCustomerTenantAgreements.');
        }

        const queryParameters: any = {};

        if (requestParameters.agreementTypeConsent !== undefined) {
            queryParameters['AgreementTypeConsent'] = requestParameters.agreementTypeConsent;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customertenants/{customerTenantId}/agreements`.replace(`{${"customerTenantId"}}`, encodeURIComponent(String(requestParameters.customerTenantId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ServiceAccountAgreementFromJSON));
    }

    /**
     */
    async listCustomerTenantAgreements(requestParameters: ListCustomerTenantAgreementsRequest, initOverrides?: RequestInit): Promise<Array<ServiceAccountAgreement>> {
        const response = await this.listCustomerTenantAgreementsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
