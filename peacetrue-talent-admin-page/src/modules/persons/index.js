import React from "react";
import {Resource} from "react-admin";

import {PersonList} from './list';
import {PersonCreate} from './create';
import {PersonEdit} from './edit';
import {PersonShow} from './show';

export const Person = {list: PersonList, create: PersonCreate, edit: PersonEdit, show: PersonShow};
const PersonResource = <Resource options={{label: '人员信息'}} name="persons" {...Person} />;
export default PersonResource;
