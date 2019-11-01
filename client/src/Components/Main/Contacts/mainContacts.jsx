import React from 'react';
import OpeningTable from './openingTable';
import HowToFindUs from './howToFindUs';
import Directions from './directions';
import ContactsForm from './contactsForm';

const Contacts = () => {
    return (
        <div className="bg_contacts">
            <div className="main_contacts">
                < Directions />
                < HowToFindUs />
                < OpeningTable />
                <p>*Please note: we will be closed over Public & Bank Holidays</p>
                < ContactsForm />
            </div>
        </div>
    )
}
export default Contacts;