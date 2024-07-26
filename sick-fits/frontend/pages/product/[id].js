import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import SingleProduct from '../../components/SingleProduct';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
