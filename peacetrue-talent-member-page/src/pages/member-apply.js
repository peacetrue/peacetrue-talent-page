import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const top100Films = [
    {title: '中国', year: 1994},
    {title: '美国', year: 1972},
    {title: '英国', year: 1974},
    {title: '日本', year: 2008},
    {title: '法国', year: 1957},
];

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const MemberApplyPage = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (<Layout>
        <SEO title="Home"/>
        <form noValidate autoComplete="off">
            <Grid
                container
                direction="row"
                // justify="center"
                alignItems="center"
                spacing={2}
                style={{marginTop: '12px', marginBottom: '12px'}}
            >
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="编号"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="姓名"/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">性别</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="Female" control={<Radio />} label="男" />
                            <FormControlLabel value="Male" control={<Radio />} label="女" />
                            <FormControlLabel value="Other" control={<Radio />} label="其他" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="生日" type="date" defaultValue="2017-05-24"
                               className={classes.textField}
                               InputLabelProps={{
                                   shrink: true,
                               }}/>
                </Grid>
                <Grid item xs={3}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        // style={{width: '100%'}}
                        renderInput={(params) => <TextField {...params} label="国籍"/>}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" label="所在地址" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="standard-basic" multiline rows={4} fullWidth label="学习工作履历"/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary"> 提交申请 </Button>
                </Grid>
            </Grid>
        </form>
    </Layout>);
}

export default MemberApplyPage
