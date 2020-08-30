import React from 'react';
import {Datagrid, DateInput, DateField, EditButton, Filter, List, TextField, TextInput} from 'react-admin';

const Filters = (props) => (
    <Filter {...props}>
                <TextInput label={'编号'} source="no" allowEmpty alwaysOn/>
                <TextInput label={'身份证号'} source="code" allowEmpty alwaysOn/>
                <TextInput label={'姓名'} source="name" allowEmpty alwaysOn/>
                <TextInput label={'性别，0：女、1：男'} source="sex" allowEmpty alwaysOn/>
                <TextInput label={'简介'} source="intro" allowEmpty alwaysOn/>
                <TextInput label={'手机号'} source="mobile" allowEmpty alwaysOn/>
                <TextInput label={'备注'} source="remark" allowEmpty alwaysOn/>
                <TextInput label={'创建者主键'} source="creatorId" allowEmpty alwaysOn/>
                <DateInput label={'创建时间起始值'} source="createdTime.lowerBound" allowEmpty alwaysOn/>
                <DateInput label={'创建时间结束值'} source="createdTime.upperBound" allowEmpty alwaysOn/>
                <TextInput label={'修改者主键'} source="modifierId" allowEmpty alwaysOn/>
                <DateInput label={'修改时间起始值'} source="modifiedTime.lowerBound" allowEmpty alwaysOn/>
                <DateInput label={'修改时间结束值'} source="modifiedTime.upperBound" allowEmpty alwaysOn/>
    </Filter>
);

export const PersonList = props => {
    console.info('PersonList:', props);
    return (
        <List {...props} title={`${props.options.label}列表`} filters={<Filters/>}
              sort={{field: 'createdTime', order: 'desc'}}>
            <Datagrid rowClick="show">
                        <TextField label={'编号'} source="no"/>
                        <TextField label={'身份证号'} source="code"/>
                        <TextField label={'姓名'} source="name"/>
                        <TextField label={'性别，0：女、1：男'} source="sex"/>
                        <TextField label={'简介'} source="intro"/>
                        <TextField label={'手机号'} source="mobile"/>
                        <TextField label={'备注'} source="remark"/>
                        <TextField label={'创建者主键'} source="creatorId"/>
                        <DateField label={'创建时间'} source="createdTime" showTime/>
                        <TextField label={'修改者主键'} source="modifierId"/>
                        <DateField label={'修改时间'} source="modifiedTime" showTime/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};
