import { Dna } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
    <Dna
      visible={isLoading}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
