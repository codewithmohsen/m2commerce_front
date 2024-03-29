'use client';

import { Box, CssBaseline, Grid, Paper, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { materialTheme } from './_assets/materialTheme';
import logo from './_assets/logo-moraba-done.svg';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import IAuthState from '../_interface/IAuthState';
import Loading from '@/app/_components/loading';
import { useSnackbar } from 'notistack';
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const dispatch = useDispatch<any>();
    const [loadPage, setLoadPage] = useState(false);
    const auth = useSelector((state: any) => state.auth) as IAuthState;
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        if (auth.data?.jwt) {
            redirect('/admin');
        }
        setLoadPage(true);
    }, [auth.data?.jwt]);

    return (
        <>
            {loadPage &&
                <ThemeProvider theme={materialTheme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />

                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: `url(${logo.src})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'secondary.main',
                                backgroundSize: '50% 50%',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid
                            item
                            container
                            direction="column"
                            justifyContent="center"
                            xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    px: 2,
                                    py: 2,
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                {children}
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            }
            {!loadPage && <Loading />}
        </>
    );
}
