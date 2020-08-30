import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import UiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StickyHeadTable from "../components/data-list";
import Autocomplete from '@material-ui/lab/Autocomplete';

const enterprises = [
    {name: '企业1', url: 'https://www.baidu.com'},
    {name: '企业2', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
    {name: '企业3', url: 'https://www.baidu.com'},
];

const organizations = [
    {name: '组织1', url: 'https://www.baidu.com'},
    {name: '组织2', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
    {name: '组织3', url: 'https://www.baidu.com'},
];

const friendlyLinks = [
    {name: '友情链接1', url: 'https://www.baidu.com'},
    {name: '友情链接2', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接1', url: 'https://www.baidu.com'},
    {name: '友情链接2', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
    {name: '友情链接3', url: 'https://www.baidu.com'},
];

const nations = [
    {title: '中国', year: 1994},
    {title: '美国', year: 1972},
    {title: '英国', year: 1974},
    {title: '日本', year: 2008},
    {title: '法国', year: 1957},
];

const preventDefault = (event) => event.preventDefault();

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <Grid
            container
            direction="row"
            // justify="center"
            alignItems="center"
            spacing={2}
            style={{marginTop: '12px', marginBottom: '12px'}}
        >
            <Grid item>
                <Typography variant="h4">
                    企业网站：
                </Typography>
            </Grid>
            {enterprises.map((item, index) =>
                <Grid item key={index}>
                    <UiLink href={item.url}>{index}-{item.name}</UiLink>
                </Grid>)
            }
        </Grid>
        <Grid
            container
            direction="row"
            // justify="center"
            alignItems="center"
            spacing={2}
            style={{marginTop: '12px', marginBottom: '12px'}}
        >
            <Grid item>
                <Typography variant="h4">
                    机构组织：
                </Typography>
            </Grid>
            {organizations.map((item, index) =>
                <Grid item key={index}>
                    <UiLink href={item.url}>{index}-{item.name}</UiLink>
                </Grid>)
            }
        </Grid>
        <form noValidate autoComplete="off">
            <Grid
                container
                direction="row"
                // justify="center"
                alignItems="center"
                spacing={2}
                style={{marginTop: '12px', marginBottom: '12px'}}
            >
                <Grid item>
                    <Typography variant="h6">
                        人才查询：
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="姓名"/>
                </Grid>
                <Grid item>
                    <TextField id="standard-basic" label="身份证号/护照号"/>
                </Grid>
                <Grid item xs={2}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={nations}
                        getOptionLabel={(option) => option.title}
                        style={{width: '100%'}}
                        renderInput={(params) => <TextField {...params} label="国籍"/>}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary"> 查询 </Button>
                </Grid>
                <Grid item xs={12}>
                    <StickyHeadTable/>
                </Grid>
            </Grid>
        </form>
        <Grid
            container
            direction="row"
            // justify="center"
            alignItems="center"
            spacing={2}
            style={{marginTop: '12px', marginBottom: '12px'}}
        >
            {friendlyLinks.map((item, index) =>
                <Grid item key={index} xs={2}>
                    <UiLink href={item.url}>{index}-{item.name}</UiLink>
                </Grid>)
            }
        </Grid>
    </Layout>
)

export default IndexPage
