import React from 'react';
import {Create, required, SimpleForm, DateTimeInput, TextInput,} from 'react-admin';

export const PersonCreate = (props) => {
    console.info('PersonCreate:', props);
    return (
        <Create {...props} title={`新建${props.options.label}`}>
            <SimpleForm>
                        <TextInput label={'编号'} source="no" validate={[ required(), ]}/>
                        <TextInput label={'身份证号'} source="code" validate={[ required(), ]}/>
                        <TextInput label={'姓名'} source="name" validate={[ required(), ]}/>
                        <TextInput label={'性别，0：女、1：男'} source="sex" validate={[ required(), ]}/>
                        <TextInput label={'简介'} source="intro" validate={[ required(), ]}/>
                        <TextInput label={'手机号'} source="mobile" validate={[ required(), ]}/>
                        <TextInput label={'备注'} source="remark" validate={[ required(), ]}/>
            </SimpleForm>
        </Create>
    );
};
