import { Helmet } from 'react-helmet-async';
const PageMetaData = ({
  title
}) => {
  return <Helmet>
      <title> {title} | Booking - Multipurpose Online Booking Theme </title>
    </Helmet>;
};
export default PageMetaData;