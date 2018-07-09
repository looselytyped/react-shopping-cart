import React from 'react';
import PropTypes from 'prop-types';

const Checkout = props =>
  <table id="cart" className="table table-hover table-condensed">
    <tfoot>
      <tr>
        <td className="hidden-xs text-center">
          <strong>
            Total {
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(props.total)
            }
          </strong>
        </td>
        <td colSpan="3" className="hidden-xs"></td>

      </tr>
    </tfoot>
  </table>

Checkout.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Checkout;
