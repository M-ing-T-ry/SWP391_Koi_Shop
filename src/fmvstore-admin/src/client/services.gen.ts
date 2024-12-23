// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise'
import { OpenAPI } from './core/OpenAPI'
import { request as __request } from './core/request'
import type { $OpenApiTs } from './types.gen'

export class DefaultService {
  /**
   * @returns string
   * @throws ApiError
   */
  public static appControllerGetHello(): CancelablePromise<
    $OpenApiTs['/v1/hello']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/hello',
    })
  }
}

export class AuthService {
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static authControllerRegister(
    data: $OpenApiTs['/v1/auth/register']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/auth/register']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/auth/register',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns LoginEntity
   * @throws ApiError
   */
  public static authControllerLogin(
    data: $OpenApiTs['/v1/auth/login']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/auth/login']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/auth/login',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns LoginEntity
   * @throws ApiError
   */
  public static authControllerRefreshToken(
    data: $OpenApiTs['/v1/auth/refresh-token']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/auth/refresh-token']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/auth/refresh-token',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static authControllerLogout(
    data: $OpenApiTs['/v1/auth/logout']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/auth/logout']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/auth/logout',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @returns UserEntity
   * @throws ApiError
   */
  public static authControllerGetMe(): CancelablePromise<
    $OpenApiTs['/v1/auth/me']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/auth/me',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static authControllerChangePassword(
    data: $OpenApiTs['/v1/auth/change-password']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/auth/change-password']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/auth/change-password',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }
}

export class UsersService {
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static usersControllerUpdateUserInformation(
    data: $OpenApiTs['/v1/users/users']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/users/users']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/users/users',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.keyword
   * @returns StaffListEntity
   * @throws ApiError
   */
  public static usersControllerGetAllStaff(
    data: $OpenApiTs['/v1/users/users/staff']['get']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/users/users/staff']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/users/users/staff',
      query: {
        keyword: data.keyword,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns StaffIndexEntity
   * @throws ApiError
   */
  public static usersControllerCreateStaff(
    data: $OpenApiTs['/v1/users/users/staff']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/users/users/staff']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/users/users/staff',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @returns StaffIndexEntity
   * @throws ApiError
   */
  public static usersControllerGetStaffDetail(
    data: $OpenApiTs['/v1/users/users/staff/{id}']['get']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/users/users/staff/{id}']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/users/users/staff/{id}',
      path: {
        id: data.id,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns StaffIndexEntity
   * @throws ApiError
   */
  public static usersControllerUpdateStaff(
    data: $OpenApiTs['/v1/users/users/staff/{id}']['patch']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/users/users/staff/{id}']['patch']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/v1/users/users/staff/{id}',
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @returns unknown
   * @throws ApiError
   */
  public static usersControllerDeleteStaff(
    data: $OpenApiTs['/v1/users/users/staff/{id}']['delete']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/users/users/staff/{id}']['delete']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/v1/users/users/staff/{id}',
      path: {
        id: data.id,
      },
    })
  }

  /**
   * @returns StaffIndexEntity
   * @throws ApiError
   */
  public static usersControllerGetProfile(): CancelablePromise<
    $OpenApiTs['/v1/users/users/profile']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/users/users/profile',
    })
  }
}

export class AddressService {
  /**
   * @returns AddressListEntity
   * @throws ApiError
   */
  public static addressesControllerGetAllAddress(): CancelablePromise<
    $OpenApiTs['/v1/addresses']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/addresses',
    })
  }

  /**
   * @returns AddressDetailEntity
   * @throws ApiError
   */
  public static addressesControllerGetDefaultAddress(): CancelablePromise<
    $OpenApiTs['/v1/addresses/default']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/addresses/default',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.addressId
   * @returns AddressDetailEntity
   * @throws ApiError
   */
  public static addressesControllerGetDetailAddress(
    data: $OpenApiTs['/v1/addresses/{addressId}']['get']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/addresses/{addressId}']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/addresses/{addressId}',
      path: {
        addressId: data.addressId,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.addressId
   * @param data.requestBody
   * @returns AddressDetailEntity
   * @throws ApiError
   */
  public static addressesControllerUpdateAddress(
    data: $OpenApiTs['/v1/addresses/{addressId}']['patch']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/addresses/{addressId}']['patch']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/v1/addresses/{addressId}',
      path: {
        addressId: data.addressId,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }
}

export class CategoriesService {
  /**
   * @param data The data for the request.
   * @param data.category
   * @returns CategoryListEntity
   * @throws ApiError
   */
  public static categoriesControllerGetAllCategories(
    data: $OpenApiTs['/v1/categories']['get']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/categories']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/categories',
      query: {
        category: data.category,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns CategoryIndexEntity
   * @throws ApiError
   */
  public static categoriesControllerCreateCategory(
    data: $OpenApiTs['/v1/categories']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/categories']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/categories',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.name
   * @param data.category
   * @param data.parentId
   * @param data.keyword search keyword
   * @param data.orderBys
   * @param data.page Current page number
   * @param data.pageSize Items number per page
   * @returns SubCategoryListEntity
   * @throws ApiError
   */
  public static categoriesControllerGetAllSubCategories(
    data: $OpenApiTs['/v1/categories/sub-categories']['get']['req'] = {},
  ): CancelablePromise<
    $OpenApiTs['/v1/categories/sub-categories']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/categories/sub-categories',
      query: {
        name: data.name,
        category: data.category,
        parentId: data.parentId,
        keyword: data.keyword,
        orderBys: data.orderBys,
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.category
   * @returns SubCategoryListEntity
   * @throws ApiError
   */
  public static categoriesControllerGetSubCategoriesByCategory(
    data: $OpenApiTs['/v1/categories/sub-categories/{category}']['get']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/categories/sub-categories/{category}']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/categories/sub-categories/{category}',
      query: {
        category: data.category,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.category
   * @param data.requestBody
   * @returns CategoryIndexEntity
   * @throws ApiError
   */
  public static categoriesControllerUpdateCategory(
    data: $OpenApiTs['/v1/categories/{category}']['patch']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/categories/{category}']['patch']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/v1/categories/{category}',
      query: {
        category: data.category,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.category
   * @returns CategoryIndexEntity
   * @throws ApiError
   */
  public static categoriesControllerDeleteCategory(
    data: $OpenApiTs['/v1/categories/{category}']['delete']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/categories/{category}']['delete']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/v1/categories/{category}',
      query: {
        category: data.category,
      },
    })
  }
}

export class ProductsService {
  /**
   * @param data The data for the request.
   * @param data.category Type of product
   * @param data.subCategory Type of product
   * @param data.fromPrice Price of product
   * @param data.toPrice Price of product
   * @param data.size Variant of product
   * @param data.color Variant of product
   * @param data.isOnsale Price of product
   * @param data.order Price of product
   * @param data.productItemIds Price of product
   * @param data.keyword search keyword
   * @param data.orderBys
   * @param data.page Current page number
   * @param data.pageSize Items number per page
   * @returns ProductListEntity
   * @throws ApiError
   */
  public static productsControllerListAllProducts(
    data: $OpenApiTs['/v1/products']['get']['req'] = {},
  ): CancelablePromise<$OpenApiTs['/v1/products']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/products',
      query: {
        category: data.category,
        subCategory: data.subCategory,
        fromPrice: data.fromPrice,
        toPrice: data.toPrice,
        size: data.size,
        color: data.color,
        isOnsale: data.isOnsale,
        order: data.order,
        productItemIds: data.productItemIds,
        keyword: data.keyword,
        orderBys: data.orderBys,
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  }

  /**
   * @returns ProductListEntity
   * @throws ApiError
   */
  public static productsControllerGetNewArrivalProducts(): CancelablePromise<
    $OpenApiTs['/v1/products/new-arrival']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/products/new-arrival',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.slug
   * @returns ProductDetailEntity
   * @throws ApiError
   */
  public static productsControllerGetProductDetail(
    data: $OpenApiTs['/v1/products/{slug}']['get']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/products/{slug}']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/products/{slug}',
      path: {
        slug: data.slug,
      },
    })
  }
}

export class AdminProductsService {
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static productsAdminControllerCreateProduct(
    data: $OpenApiTs['/v1/admin/products']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/admin/products']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/admin/products',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.category Type of product
   * @param data.subCategory Type of product
   * @param data.name Name of product
   * @param data.keyword search keyword
   * @param data.orderBys
   * @param data.page Current page number
   * @param data.pageSize Items number per page
   * @returns ProductListAdminEntity
   * @throws ApiError
   */
  public static productsAdminControllerListAllProductsAdmin(
    data: $OpenApiTs['/v1/admin/products']['get']['req'] = {},
  ): CancelablePromise<$OpenApiTs['/v1/admin/products']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/admin/products',
      query: {
        category: data.category,
        subCategory: data.subCategory,
        name: data.name,
        keyword: data.keyword,
        orderBys: data.orderBys,
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @returns ProductDetailAdminEntity
   * @throws ApiError
   */
  public static productsAdminControllerGetDetailProductAdmin(
    data: $OpenApiTs['/v1/admin/products/{id}']['get']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/admin/products/{id}']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/admin/products/{id}',
      query: {
        id: data.id,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static productsAdminControllerUpdateProductAdmin(
    data: $OpenApiTs['/v1/admin/products/{id}']['patch']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/admin/products/{id}']['patch']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/v1/admin/products/{id}',
      query: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @returns boolean
   * @throws ApiError
   */
  public static productsAdminControllerDeleteProduct(
    data: $OpenApiTs['/v1/admin/products/{id}']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/admin/products/{id}']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/admin/products/{id}',
      query: {
        id: data.id,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns number
   * @throws ApiError
   */
  public static productsAdminControllerSeachProductByImage(
    data: $OpenApiTs['/v1/admin/products/search']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/admin/products/search']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/admin/products/search',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }
}

export class StorageService {
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns string
   * @throws ApiError
   */
  public static storageControllerCreatePresignedUrl(
    data: $OpenApiTs['/v1/storage/presigned-url']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/storage/presigned-url']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/storage/presigned-url',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns string
   * @throws ApiError
   */
  public static storageControllerGetPresignedUrl(
    data: $OpenApiTs['/v1/storage/presigned-url']['get']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/storage/presigned-url']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/storage/presigned-url',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static storageControllerDeleteObject(
    data: $OpenApiTs['/v1/storage/delete']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/storage/delete']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/storage/delete',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }
}

export class OrdersService {
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns boolean
   * @throws ApiError
   */
  public static ordersControllerCreateOrder(
    data: $OpenApiTs['/v1/orders']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/orders']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/orders',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @returns OrderListEntity
   * @throws ApiError
   */
  public static ordersControllerGetOrders(): CancelablePromise<
    $OpenApiTs['/v1/orders']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/orders',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.user
   * @param data.orderStatus
   * @param data.to
   * @param data.paymentMethod
   * @param data.from
   * @param data.keyword search keyword
   * @param data.orderBys
   * @param data.page Current page number
   * @param data.pageSize Items number per page
   * @returns OrderListEntity
   * @throws ApiError
   */
  public static ordersControllerFilterOrders(
    data: $OpenApiTs['/v1/orders/admin']['get']['req'] = {},
  ): CancelablePromise<$OpenApiTs['/v1/orders/admin']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/orders/admin',
      query: {
        user: data.user,
        orderStatus: data.orderStatus,
        to: data.to,
        paymentMethod: data.paymentMethod,
        from: data.from,
        keyword: data.keyword,
        orderBys: data.orderBys,
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns boolean
   * @throws ApiError
   */
  public static ordersControllerUpdateStatus(
    data: $OpenApiTs['/v1/orders/admin/status/{id}']['patch']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/orders/admin/status/{id}']['patch']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/v1/orders/admin/status/{id}',
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }
}

export class VariationsService {
  /**
   * @returns VariationListEntity
   * @throws ApiError
   */
  public static variationsControllerGetAllVariations(): CancelablePromise<
    $OpenApiTs['/v1/variations']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/variations',
    })
  }

  /**
   * @returns VariationOptionListEntity
   * @throws ApiError
   */
  public static variationsControllerGetAllVariationOptions(): CancelablePromise<
    $OpenApiTs['/v1/variations/options']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/variations/options',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.type
   * @param data.keyword
   * @returns VariationOptionListAdminEntity
   * @throws ApiError
   */
  public static variationsControllerGetAllVariationsAdmin(
    data: $OpenApiTs['/v1/variations/{type}']['get']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/variations/{type}']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/variations/{type}',
      path: {
        type: data.type,
      },
      query: {
        keyword: data.keyword,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.type
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static variationsControllerCreateVariation(
    data: $OpenApiTs['/v1/variations/{type}']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/variations/{type}']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/variations/{type}',
      path: {
        type: data.type,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.type
   * @param data.id
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static variationsControllerUpdateVariation(
    data: $OpenApiTs['/v1/variations/{type}/{id}']['patch']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/variations/{type}/{id}']['patch']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/v1/variations/{type}/{id}',
      path: {
        type: data.type,
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @param data.type
   * @returns unknown
   * @throws ApiError
   */
  public static variationsControllerDeleteVariation(
    data: $OpenApiTs['/v1/variations/{type}/{id}']['delete']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/variations/{type}/{id}']['delete']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/v1/variations/{type}/{id}',
      path: {
        id: data.id,
        type: data.type,
      },
    })
  }
}

export class CartsService {
  /**
   * @returns CartItemListEntity
   * @throws ApiError
   */
  public static cartsControllerGetAllProductItemInCart(): CancelablePromise<
    $OpenApiTs['/v1/carts']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/carts',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns CartItemIndexEntity
   * @throws ApiError
   */
  public static cartsControllerAddProductItemToCart(
    data: $OpenApiTs['/v1/carts']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/carts']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/carts',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns CartItemIndexEntity
   * @throws ApiError
   */
  public static cartsControllerUpdateCartItem(
    data: $OpenApiTs['/v1/carts']['patch']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/carts']['patch']['res'][200]> {
    return __request(OpenAPI, {
      method: 'PATCH',
      url: '/v1/carts',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }
}

export class PromotionsService {
  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns PromotionIndexEntity
   * @throws ApiError
   */
  public static promotionsControllerApplyPromotion(
    data: $OpenApiTs['/v1/promotions/apply']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/promotions/apply']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/promotions/apply',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.requestBody
   * @returns boolean
   * @throws ApiError
   */
  public static promotionsControllerCreatePromotion(
    data: $OpenApiTs['/v1/promotions']['post']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/promotions']['post']['res'][201]> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/promotions',
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.code
   * @param data.keyword search keyword
   * @param data.orderBys
   * @param data.page Current page number
   * @param data.pageSize Items number per page
   * @returns PromotionListEntity
   * @throws ApiError
   */
  public static promotionsControllerGetPromotion(
    data: $OpenApiTs['/v1/promotions']['get']['req'] = {},
  ): CancelablePromise<$OpenApiTs['/v1/promotions']['get']['res'][200]> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/promotions',
      query: {
        code: data.code,
        keyword: data.keyword,
        orderBys: data.orderBys,
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @returns boolean
   * @throws ApiError
   */
  public static promotionsControllerDeletePromotion(
    data: $OpenApiTs['/v1/promotions/{id}']['delete']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/promotions/{id}']['delete']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/v1/promotions/{id}',
      query: {
        id: data.id,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns unknown
   * @throws ApiError
   */
  public static promotionsControllerUpdatePromotion(
    data: $OpenApiTs['/v1/promotions/{id}']['put']['req'],
  ): CancelablePromise<$OpenApiTs['/v1/promotions/{id}']['put']['res'][200]> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/v1/promotions/{id}',
      query: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }
}

export class AnalyticsService {
  /**
   * @returns GeneralAnalyticEntity
   * @throws ApiError
   */
  public static analyticsControllerGeneralStatistic(): CancelablePromise<
    $OpenApiTs['/v1/analytics']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/analytics',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.from Type of product
   * @param data.to Type of product
   * @param data.statisticType Type of product
   * @param data.category Type of product
   * @param data.subCategory Type of product
   * @returns DetailAnalyticEntity
   * @throws ApiError
   */
  public static analyticsControllerOrderCount(
    data: $OpenApiTs['/v1/analytics/order_count']['get']['req'] = {},
  ): CancelablePromise<
    $OpenApiTs['/v1/analytics/order_count']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/analytics/order_count',
      query: {
        from: data.from,
        to: data.to,
        statisticType: data.statisticType,
        category: data.category,
        subCategory: data.subCategory,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.from Type of product
   * @param data.to Type of product
   * @param data.statisticType Type of product
   * @param data.category Type of product
   * @param data.subCategory Type of product
   * @returns DetailAnalyticEntity
   * @throws ApiError
   */
  public static analyticsControllerOrderStatistic(
    data: $OpenApiTs['/v1/analytics/order_statistic']['get']['req'] = {},
  ): CancelablePromise<
    $OpenApiTs['/v1/analytics/order_statistic']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/analytics/order_statistic',
      query: {
        from: data.from,
        to: data.to,
        statisticType: data.statisticType,
        category: data.category,
        subCategory: data.subCategory,
      },
    })
  }

  /**
   * @param data The data for the request.
   * @param data.from Type of product
   * @param data.to Type of product
   * @param data.statisticType Type of product
   * @param data.category Type of product
   * @param data.subCategory Type of product
   * @returns DetailAnalyticEntity
   * @throws ApiError
   */
  public static analyticsControllerProductStatistic(
    data: $OpenApiTs['/v1/analytics/product_statistic']['get']['req'] = {},
  ): CancelablePromise<
    $OpenApiTs['/v1/analytics/product_statistic']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/analytics/product_statistic',
      query: {
        from: data.from,
        to: data.to,
        statisticType: data.statisticType,
        category: data.category,
        subCategory: data.subCategory,
      },
    })
  }
}

export class ReviewsService {
  /**
   * @param data The data for the request.
   * @param data.productItemId
   * @param data.orderId
   * @param data.requestBody
   * @returns ReviewIndexEntity
   * @throws ApiError
   */
  public static reviewsControllerLeaveReview(
    data: $OpenApiTs['/v1/reviews/{productItemId}/{orderId}']['post']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/reviews/{productItemId}/{orderId}']['post']['res'][201]
  > {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/v1/reviews/{productItemId}/{orderId}',
      path: {
        productItemId: data.productItemId,
        orderId: data.orderId,
      },
      body: data.requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * @param data The data for the request.
   * @param data.productId
   * @param data.page Current page number
   * @param data.pageSize Items number per page
   * @returns ReviewListEntity
   * @throws ApiError
   */
  public static reviewsControllerGetAllReviews(
    data: $OpenApiTs['/v1/reviews/{productId}']['get']['req'],
  ): CancelablePromise<
    $OpenApiTs['/v1/reviews/{productId}']['get']['res'][200]
  > {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/v1/reviews/{productId}',
      path: {
        productId: data.productId,
      },
      query: {
        page: data.page,
        pageSize: data.pageSize,
      },
    })
  }
}
