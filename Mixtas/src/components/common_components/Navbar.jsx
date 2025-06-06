import React, { useContext } from 'react';
import { my_asset } from '../../assets/asset';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/MyContextProvider';

const Navbar = () => {

  const { setInput , SearchFun , filteredData , navigate } = useContext(MyContext);

  return (
    <>
      {/* Top bar */}
      <div className="container-fluid d-flex justify-content-between px-5 pt-2 pb-0 border">
        <p>Free shipping on US orders $100+ & Free exchanges</p>
        <div>
          <span>English</span>
          <span>USD</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid d-flex justify-content-between align-items-center px-5 py-3">
        <img src={my_asset.logo} alt="logo" height={30} />
        <div className="menu d-flex gap-3">
          <Link to="/" className="text-decoration-none text-dark">Home</Link>
          <Link to="/shop" className="text-decoration-none text-dark">Shop</Link>
          <Link to="/" className="text-decoration-none text-dark">Contact</Link>
        </div>
        <div className="icon d-flex gap-3">
          <i className="fa-solid fa-magnifying-glass" data-bs-toggle="modal" data-bs-target="#mymodal"></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id='mymodal'>
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Search Here</h4>
              <button className='btn-close' data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input type="text" className='form-control' onChange={e => setInput(e.target.value)} onKeyUp={SearchFun} />
              
              <div className="row">
                {
                  filteredData.length === 0 
                  ?
                    <p className='m-5 text-center'>No Products Found</p>
                  : 
                    filteredData.map((value , index) => {
                      return(
                        <div className="col-lg-3 col-md-6 my-4" key={index}>
                          <div className="card border-0" onClick={() => navigate(`/product/${value.id}`)}>
                            <img src={value.img} alt="" />
                            <div className="card-body">
                                  <p className='text-secondary'>{value.type}</p>
                                  <p style={{fontSize : "15px"}}>{value.desc}</p>
                                  <p>{value.price}</p>
                              </div>
                          </div>
                        </div>
                      )
                    })
                }
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;