import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Table } from 'reactstrap';
import './Details.css'
import classnames from 'classnames';
const details = (props) => {

    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="admin-details-main-div">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Likes
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Orders
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Logs
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        Info
                    </NavLink>
                </NavItem>

            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Table>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Card Name</th>
                                <th>Price</th>
                                <th>Likes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Wedding Card</td>
                                <td>100</td>
                                <td>46</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Birthday Card</td>
                                <td>250</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Anniversary</td>
                                <td>300</td>
                                <td>78</td>
                            </tr>
                        </tbody>
                    </Table>
                </TabPane>
                <TabPane tabId="2">
                    <div className="table-div">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Customer Name</th>
                                    <th>Address</th>
                                    <th>Contact No</th>
                                    <th>Product Purchased</th>
                                    <th>Price(Rs)</th>
                                    <th>Payment<br></br>
                                    Method</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Mumbai</td>
                                    <td>989767967</td>
                                    <td>Wedding Card</td>
                                    <td>323</td>
                                    <td>COD</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <Table>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Event</th>

                                <th>Name</th>

                                <th>Type of User</th>
                                <th>Date / Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </TabPane>
                <TabPane tabId="4">
                    <Table>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Card Name</th>
                                <th>Price</th>
                                <th>Like</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </TabPane>
            </TabContent>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(details);