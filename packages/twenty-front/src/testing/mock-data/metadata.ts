import { ObjectMetadataItem } from '@/object-metadata/types/ObjectMetadataItem';
import { mapPaginatedObjectMetadataItemsToObjectMetadataItems } from '@/object-metadata/utils/mapPaginatedObjectMetadataItemsToObjectMetadataItems';
import {
  FieldMetadataType,
  ObjectEdge,
  ObjectMetadataItemsQuery,
} from '~/generated-metadata/graphql';
import { mockedStandardObjectMetadataQueryResult } from '~/testing/mock-data/generated/standard-metadata-query-result';

// TODO: replace with new mock
const customObjectMetadataItemEdge: ObjectEdge = {
  __typename: 'objectEdge',
  node: {
    __typename: 'object',
    id: 'efa1addc-a9cb-4789-b99e-a060fa84f982',
    dataSourceId: 'd36e6a2d-28bc-459d-afd5-fe18e4405729',
    nameSingular: 'myCustom',
    namePlural: 'myCustoms',
    labelSingular: 'My Custom',
    labelPlural: 'My Customs',
    description: 'A custom object example',
    icon: 'IconLayoutCollage',
    isCustom: true,
    isRemote: false,
    isActive: true,
    isSystem: false,
    createdAt: '2024-04-08T12:48:49.538Z',
    updatedAt: '2024-04-08T12:48:49.538Z',
    labelIdentifierFieldMetadataId: null,
    imageIdentifierFieldMetadataId: null,
    fields: {
      __typename: 'ObjectFieldsConnection',
      pageInfo: {
        __typename: 'PageInfo',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjEz',
      },
      edges: [
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: 'ea83af89-be10-49af-a605-10c3392ae007',
            type: 'RELATION',
            name: 'companies',
            label: 'Companies',
            description: 'A custom Relation example',
            icon: 'IconTag',
            isCustom: false,
            isActive: true,
            isSystem: true,
            options: null,
            isNullable: true,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: null,
            relationDefinition: {
              relationId: '1ec22b36-9e3c-4f24-8cf6-6c387ec3f243',
              __typename: 'RelationDefinition',
              direction: 'ONE_TO_MANY',
              sourceObjectMetadata: {
                __typename: 'object',
                id: 'efa1addc-a9cb-4789-b99e-a060fa84f982',
                nameSingular: 'myCustom',
                namePlural: 'myCustoms',
              },
              sourceFieldMetadata: {
                __typename: 'field',
                id: 'ea83af89-be10-49af-a605-10c3392ae007',
                name: 'companies',
              },
              targetObjectMetadata: {
                __typename: 'object',
                id: 'dba899da-7d88-41ac-b70e-5ea612ab4b2e',
                nameSingular: 'company',
                namePlural: 'companies',
              },
              targetFieldMetadata: {
                __typename: 'field',
                id: 'c9607ed7-168d-4743-a56a-689ffcfffe98',
                name: 'myCustom',
              },
            },
            toRelationMetadata: null,
            fromRelationMetadata: {
              __typename: 'relation',
              id: 'c5cdbacd-2489-4409-be9e-bb4cb38f6ddd',
              relationType: 'ONE_TO_MANY',
              toFieldMetadataId: 'c9607ed7-168d-4743-a56a-689ffcfffe98',
              toObjectMetadata: {
                __typename: 'object',
                id: 'dba899da-7d88-41ac-b70e-5ea612ab4b2e',
                dataSourceId: 'd36e6a2d-28bc-459d-afd5-fe18e4405729',
                nameSingular: 'viewField',
                namePlural: 'viewFields',
                isSystem: true,
                isRemote: false,
              },
            },
          },
        },
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: 'c5384d2a-9ec3-4e1b-b93f-86f53f122169',
            type: 'UUID',
            name: 'objectMetadataId',
            label: 'Object Metadata Id',
            description: 'View target object',
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            options: null,
            isNullable: false,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: null,
            relationDefinition: null,
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: 'bb4d96be-e4d9-47a9-812d-fcdfb063ebf3',
            type: 'POSITION',
            name: 'position',
            label: 'Position',
            description: 'View position',
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            options: null,
            isNullable: true,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: null,
            relationDefinition: null,
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: 'f20c68aa-3930-41c4-9f79-45dceda506df',
            type: 'TEXT',
            name: 'name',
            label: 'Name',
            description: 'Custom name',
            icon: null,
            isCustom: false,
            isActive: true,
            isSystem: true,
            options: null,
            isNullable: false,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: "''",
            relationDefinition: null,
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: 'a3ef848d-660a-4aef-9cd4-5baf25ce36ed',
            type: 'DATE_TIME',
            name: 'createdAt',
            label: 'Creation date',
            description: 'Creation date',
            icon: 'IconCalendar',
            isCustom: false,
            isActive: true,
            isSystem: true,
            options: null,
            isNullable: false,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: 'now',
            relationDefinition: null,
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: '92f3e27c-041d-45b2-b2bd-46db2b1aec3f',
            type: 'DATE_TIME',
            name: 'updatedAt',
            label: 'Update date',
            description: 'Update date',
            icon: 'IconCalendar',
            isCustom: false,
            isActive: true,
            isSystem: true,
            options: null,
            isNullable: false,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: 'now',
            relationDefinition: null,
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: '8d7987eb-99e8-4e54-a86c-86b3bd07d2be',
            type: 'UUID',
            name: 'id',
            label: 'Id',
            description: 'Id',
            icon: 'Icon123',
            isCustom: false,
            isActive: true,
            isSystem: true,
            options: null,
            isNullable: false,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: 'uuid',
            relationDefinition: null,
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
        {
          __typename: 'fieldEdge',
          node: {
            __typename: 'field',
            id: 'e07fcc3f-beec-4d91-8488-9d1d2cfa5f99',
            type: FieldMetadataType.Select,
            name: 'priority',
            label: 'Priority',
            description: 'A custom Select example',
            icon: 'IconWarning',
            isCustom: true,
            isActive: true,
            isSystem: false,
            options: [
              {
                id: '2b98dc02-0d99-4f3e-890e-e2e6b8f3196c',
                value: 'LOW',
                label: 'Low',
                color: 'turquoise',
              },
              {
                id: 'd925a8de-d8ec-4b59-a079-64f4012e3311',
                value: 'MEDIUM',
                label: 'Medium',
                color: 'yellow',
              },
              {
                id: '6f6e1421-8a42-4d4a-bf76-465b5f84b6d2',
                value: 'HIGH',
                label: 'High',
                color: 'red',
              },
            ],
            isNullable: true,
            createdAt: '2024-04-08T12:48:49.538Z',
            updatedAt: '2024-04-08T12:48:49.538Z',
            defaultValue: null,
            relationDefinition: null,
            fromRelationMetadata: null,
            toRelationMetadata: null,
          },
        },
      ],
    },
  },
} as ObjectEdge;

export const mockedObjectMetadataItemsQueryResult = {
  ...mockedStandardObjectMetadataQueryResult,
  objects: {
    ...mockedStandardObjectMetadataQueryResult.objects,
    edges: [
      ...mockedStandardObjectMetadataQueryResult.objects.edges,
      customObjectMetadataItemEdge,
    ],
  },
} as ObjectMetadataItemsQuery;

export const mockedObjectMetadataItems =
  mapPaginatedObjectMetadataItemsToObjectMetadataItems({
    pagedObjectMetadataItems: mockedObjectMetadataItemsQueryResult,
  });

export const mockedCompanyObjectMetadataItem = mockedObjectMetadataItems?.find(
  (object) => object.nameSingular === 'company',
) as ObjectMetadataItem;

export const mockedPersonObjectMetadataItem = mockedObjectMetadataItems?.find(
  (object) => object.nameSingular === 'person',
) as ObjectMetadataItem;

export const mockedCustomObjectMetadataItem = mockedObjectMetadataItems?.find(
  (object) => object.nameSingular === 'myCustom',
) as ObjectMetadataItem;

export const mockedOpportunityObjectMetadataItem =
  mockedObjectMetadataItems?.find(
    (object) => object.nameSingular === 'opportunity',
  ) as ObjectMetadataItem;
