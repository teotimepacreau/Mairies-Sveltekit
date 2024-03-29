//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  article: Article;
  articleConnection: ArticleConnection;
  pages: Pages;
  pagesConnection: PagesConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticleArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticleConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleFilter>;
};


export type QueryPagesArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPagesConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PagesFilter>;
};

export type DocumentFilter = {
  article?: InputMaybe<ArticleFilter>;
  pages?: InputMaybe<PagesFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Article | Pages | Folder;

export type Article = Node & Document & {
  __typename?: 'Article';
  titre: Scalars['String']['output'];
  desc: Scalars['String']['output'];
  date: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imagealt?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleFilter = {
  titre?: InputMaybe<StringFilter>;
  desc?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  imagealt?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type ArticleConnectionEdges = {
  __typename?: 'ArticleConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Article>;
};

export type ArticleConnection = Connection & {
  __typename?: 'ArticleConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<ArticleConnectionEdges>>>;
};

export type Pages = Node & Document & {
  __typename?: 'Pages';
  titre: Scalars['String']['output'];
  categorie: Array<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  contenu: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type PagesFilter = {
  titre?: InputMaybe<StringFilter>;
  categorie?: InputMaybe<StringFilter>;
  emoji?: InputMaybe<StringFilter>;
  contenu?: InputMaybe<RichTextFilter>;
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Pages>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateArticle: Article;
  createArticle: Article;
  updatePages: Pages;
  createPages: Pages;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdateArticleArgs = {
  relativePath: Scalars['String']['input'];
  params: ArticleMutation;
};


export type MutationCreateArticleArgs = {
  relativePath: Scalars['String']['input'];
  params: ArticleMutation;
};


export type MutationUpdatePagesArgs = {
  relativePath: Scalars['String']['input'];
  params: PagesMutation;
};


export type MutationCreatePagesArgs = {
  relativePath: Scalars['String']['input'];
  params: PagesMutation;
};

export type DocumentUpdateMutation = {
  article?: InputMaybe<ArticleMutation>;
  pages?: InputMaybe<PagesMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  article?: InputMaybe<ArticleMutation>;
  pages?: InputMaybe<PagesMutation>;
};

export type ArticleMutation = {
  titre?: InputMaybe<Scalars['String']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imagealt?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type PagesMutation = {
  titre?: InputMaybe<Scalars['String']['input']>;
  categorie?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  contenu?: InputMaybe<Scalars['JSON']['input']>;
};

export type ArticlePartsFragment = { __typename: 'Article', titre: string, desc: string, date: string, image?: string | null, imagealt?: string | null, body?: any | null };

export type PagesPartsFragment = { __typename: 'Pages', titre: string, categorie: Array<string>, emoji: string, contenu: any };

export type ArticleQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', article: { __typename: 'Article', id: string, titre: string, desc: string, date: string, image?: string | null, imagealt?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type ArticleConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ArticleFilter>;
}>;


export type ArticleConnectionQuery = { __typename?: 'Query', articleConnection: { __typename?: 'ArticleConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'ArticleConnectionEdges', cursor: string, node?: { __typename: 'Article', id: string, titre: string, desc: string, date: string, image?: string | null, imagealt?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PagesQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PagesQuery = { __typename?: 'Query', pages: { __typename: 'Pages', id: string, titre: string, categorie: Array<string>, emoji: string, contenu: any, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PagesConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PagesFilter>;
}>;


export type PagesConnectionQuery = { __typename?: 'Query', pagesConnection: { __typename?: 'PagesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PagesConnectionEdges', cursor: string, node?: { __typename: 'Pages', id: string, titre: string, categorie: Array<string>, emoji: string, contenu: any, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const ArticlePartsFragmentDoc = gql`
    fragment ArticleParts on Article {
  __typename
  titre
  desc
  date
  image
  imagealt
  body
}
    `;
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  titre
  categorie
  emoji
  contenu
}
    `;
export const ArticleDocument = gql`
    query article($relativePath: String!) {
  article(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ArticleParts
  }
}
    ${ArticlePartsFragmentDoc}`;
export const ArticleConnectionDocument = gql`
    query articleConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ArticleFilter) {
  articleConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ArticleParts
      }
    }
  }
}
    ${ArticlePartsFragmentDoc}`;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      article(variables: ArticleQueryVariables, options?: C): Promise<{data: ArticleQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ArticleQueryVariables, query: string}> {
        return requester<{data: ArticleQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ArticleQueryVariables, query: string}, ArticleQueryVariables>(ArticleDocument, variables, options);
      },
    articleConnection(variables?: ArticleConnectionQueryVariables, options?: C): Promise<{data: ArticleConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ArticleConnectionQueryVariables, query: string}> {
        return requester<{data: ArticleConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ArticleConnectionQueryVariables, query: string}, ArticleConnectionQueryVariables>(ArticleConnectionDocument, variables, options);
      },
    pages(variables: PagesQueryVariables, options?: C): Promise<{data: PagesQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PagesQueryVariables, query: string}> {
        return requester<{data: PagesQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PagesQueryVariables, query: string}, PagesQueryVariables>(PagesDocument, variables, options);
      },
    pagesConnection(variables?: PagesConnectionQueryVariables, options?: C): Promise<{data: PagesConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PagesConnectionQueryVariables, query: string}> {
        return requester<{data: PagesConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PagesConnectionQueryVariables, query: string}, PagesConnectionQueryVariables>(PagesConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
  options?: { branch?: string }
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: { branch?: string },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    })

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
  options?: {
    branch?: string
  }
) => {
  const requester = generateRequester(client, options)
  return getSdk(requester)
}

  