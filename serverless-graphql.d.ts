declare module "serverless-graphql" {
  export function graphqlServerless(options: any): (event: any, context: any, callback: any) => void;
}
