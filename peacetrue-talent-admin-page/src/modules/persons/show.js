import React from 'react';
import {DateField, Show, SimpleShowLayout, TextField} from 'react-admin';

export const PersonShow = (props) => {
    console.info('PersonShow:', props);
    return (
        <Show {...props} title={`${props.options.label}#${props.id}`}>
            <SimpleShowLayout>
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
            </SimpleShowLayout>
        </Show>
    );
};
