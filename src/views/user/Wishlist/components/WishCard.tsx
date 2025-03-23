import { currency } from '@/states'
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image, Row } from 'react-bootstrap'
import { BsGeoAlt } from 'react-icons/bs'
import { FaCopy, FaFacebookSquare, FaHeart, FaLinkedin, FaShareAlt, FaStar, FaStarHalfAlt, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { type WishCardType } from '../data'

const WishCard = ({ wishCard }: { wishCard: WishCardType }) => {
  const { address, image, name, price, rating } = wishCard
  return (
    <Card className="shadow p-2">
      <Row className="g-0">
        <Col md={3}>
          <Image src={image} className="card-img rounded-2" alt="Card image" />
        </Col>
        <Col md={9}>
          <CardBody className="py-md-2 d-flex flex-column h-100">
            <div className="d-flex justify-content-between align-items-center">
              <ul className="list-inline small mb-1">
                {Array.from(new Array(Math.floor(rating))).map((_star, idx) => (
                  <li key={idx} className="list-inline-item me-1 small">
                    <FaStar size={16} className="text-warning" />
                  </li>
                ))}
                {!Number.isInteger(rating) && (
                  <li className="list-inline-item me-1 small">
                    <FaStarHalfAlt size={15} className="text-warning" />
                  </li>
                )}
                {rating < 5 &&
                  Array.from(new Array(5 - Math.ceil(rating))).map((_val, idx) => (
                    <li key={idx} className="list-inline-item me-1 small">
                      <FaStar size={16} />
                    </li>
                  ))}
              </ul>
              <ul className="list-inline mb-0 items-center gap-1">
                <li className="list-inline-item">
                  <Link to="" className="btn btn-sm btn-round btn-danger mb-0">
                    <FaHeart size={10} className="fa-fw" />
                  </Link>
                </li>
                <Dropdown className="list-inline-item">
                  <DropdownToggle as={Link} to="" className="arrow-none btn btn-sm btn-round btn-light mb-0">
                    <FaShareAlt size={10} />
                  </DropdownToggle>
                  <DropdownMenu align="end" className="min-w-auto shadow rounded">
                    <li>
                      <DropdownItem href="">
                        <FaTwitterSquare className="me-2" />
                        Twitter
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="">
                        <FaFacebookSquare className="me-2" />
                        Facebook
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="">
                        <FaLinkedin className="me-2" />
                        LinkedIn
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem href="">
                        <FaCopy className="me-2" />
                        Copy link
                      </DropdownItem>
                    </li>
                  </DropdownMenu>
                </Dropdown>
              </ul>
            </div>
            <h5 className="card-title mb-1">
              <Link to="/hotels/detail">{name}</Link>
            </h5>
            <small className="items-center">
              <BsGeoAlt className=" me-2" />
              {address}
            </small>
            <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
              <div className="d-flex align-items-center">
                <h5 className="fw-bold mb-0 me-1">
                  {currency}
                  {price}
                </h5>
                <span className="mb-0 me-2">/day</span>
              </div>
              <div className="mt-3 mt-sm-0">
                <Link to="/hotels/detail" className="btn btn-sm btn-dark w-100 mb-0">
                  View hotel
                </Link>
              </div>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default WishCard
