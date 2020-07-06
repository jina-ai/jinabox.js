let _icons = {
	color: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDEwcHgiIGhlaWdodD0iNDEwcHgiIHZpZXdCb3g9IjAgMCA0MTAgNDEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlByb2R1Y3QgbG9nb19Db3JlX0NvbG9yZnVsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvZHVjdC1sb2dvX0NvcmVfQ29sb3JmdWwiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNDcuODE2MjczLDE1My4yMTczNjggTDI0OS43MzA4MzIsMTUzLjI0MDUzMSBDMjg4LjIwODk3NCwxNTQuNjgzMDI3IDMwOS44NjQ2OSwxNzAuMzE1MTY2IDMyNy4xMDg5ODUsMTkzLjE1Nzg2MyBDMzE5LjIxNDY0MywyNzIuMzU1NTEyIDI1MC4wNjA3MTEsMzMwLjIwNTg3NSAxNzEuNTI0MjQzLDMyNi45OTY0NTIgQzEzMS41NjU5NzcsMzI0LjU5NjA3NCA5Ni42NjE3MDc5LDMwNi42MjYyNDMgNzEuNzI4NjYwMywyNzkuNTI0OTA0IEMxMTQuMzYxOTczLDIyMC43NDU5NzUgMTgzLjM2OTk5NCwxNTQuNDg2NTY3IDI0NS45MTAyLDE1My4yMzUyOTcgTDI0Ny44MTYyNzMsMTUzLjIxNzM2OCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZDQzY2Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC42MTYzNTQ5LDIyMi4wNjY3MTkgTDM4LjY0NTc3OTQsMjIyLjAyNTkxMSBDNTMuNTM5MzMwNiwyMDAuMDk3NjYyIDc3LjM5NzEwMiwxNzguMzEwNzk4IDEwOS4zNTcxNzUsMTg3LjA3OTMzOSBDMTcwLjEzNDY3OCwyMDQuOTc0MzIxIDIyNy4xODU1MTcsMjQxLjYzMjY1IDI2MS45Njk5NDQsMjQwLjU5NzMzNyBDMjk1LjA3NDUxOSwyMzkuNjEyMDI0IDMwOC40NDI4MzEsMjI5Ljc2ODUyNCAzMjIuOTQ3NzU1LDIxNi4yNjU1MTkgQzMwNS4yNzE4OTgsMjgzLjMyODM3MiAyNDIuMTk2OTA1LDMyOS44ODQ1MTggMTcxLjUyNDI0MywzMjYuOTk2NDUyIEMxMDcuNTE0ODg4LDMyMy4xNTEyNzQgNTYuNDc0NTk3NCwyNzkuMzUzMzE3IDM4LjYxNjM1NDksMjIyLjA2NjcxOSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkY3NjczIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDQuMTIxOTYsMjAwLjcwMDUzMyBMMTQ1LjM5NDI1OCwxOTkuNjI5NTA3IEwxNDguMDE3NTk3LDIwMC42Mjk1MzIgQzE5MC42ODcwNTMsMjE2Ljk5MTg4OSAyMjQuNjI0ODg1LDIzNC42NTgzNDggMjUxLjM5MjkzNywyMzkuMjE4NTM1IEMyODQuODcxNTU1LDI0NC45MjE5MyAzMDYuOTExMzA5LDIyOS4wODI2NDkgMzIzLjA5MDg3NiwyMTUuNzI3ODAyIEMzMDUuNjEwNzkxLDI4My4wNzc4MzUgMjQyLjM4Njc5MywzMjkuODkyMjc4IDE3MS41MjQyNDMsMzI2Ljk5NjQ1MiBDMTMyLjI5MjA2LDMyNC42Mzk2OTEgOTcuOTMxODcwNiwzMDcuMjc0MTYzIDczLjA5NzY4NjMsMjgwLjk5MzE5OCBDOTEuODQzMzY1MSwyNTIuODc3MjA0IDExNi43MjExNDQsMjIzLjkyMTM2OSAxNDQuMTIxOTYsMjAwLjcwMDUzMyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkY5RjczIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzkuODExMzg4LDMwMy41MjA0NjEgTDM5OS42MTMyOTksMzU3LjI2ODUzOCBDNDEyLjAwNDI4NSwzNjguNDA1MjQgNDEzLjAwNzA4OCwzODcuNDM2NCA0MDEuODU0NjU4LDM5OS44MDQ5NjcgQzM5MC44NDA4MDUsNDEyLjAxOTg0NiAzNzIuMDUzODAyLDQxMy4xMzY5MzcgMzU5LjY2NTE1Miw0MDIuNDAxMzA2IEwzNTkuMjQ5MTk3LDQwMi4wMzQyMTcgTDI5Ni4wOTAyNzQsMzQ1LjI2ODM1NSBDMzEyLjY3NTc1MSwzMzMuNjA4MDA1IDMyNy40MjI1NzcsMzE5LjUxOTIxOCAzMzkuODExMzg4LDMwMy41MjA0NjEgWiBNMC41NTAwMzIxOTIsMTY4LjQ4MjU2OCBDNS45MTU2MzY4OCw3MC4wNjA2NjE5IDkxLjc2NTMxMTksLTUuMDk3ODg0NzQgMTkwLjEzNDczMSwwLjI3MDU4Mjg4MSBDMjg4LjUwNDE1LDcuNDI4NTM5ODQgMzY1LjQxMTE1MSw5MS41MzQ1MzI4IDM1OC4yNTcwMTEsMTg5Ljk1NjQzOSBDMzUxLjEwMjg3MiwyODguMzc4MzQ1IDI2Ny4wNDE3MzIsMzYzLjUzNjg5MSAxNjguNjcyMzEzLDM1OC4xNjg0MjQgQzcwLjMwMjg5MzEsMzUyLjc5OTk1NiAtNC44MTU1NzI1LDI2Ni45MDQ0NzUgMC41NTAwMzIxOTIsMTY4LjQ4MjU2OCBaIE0xODcuOTUyMTI3LDMwLjkzOTA5ODEgQzEwNy40NTU0OTcsMjcuNjQ5NTcxNyAzNS4xNzI4MDk1LDkwLjE1MDU2ODUgMzEuODg3MjMyNSwxNzAuNzQzOTU5IEMyOC42MDE2NTU1LDI1MS4zMzczNSA4OS4zODQ4MjUxLDMyMi4wNjIxNjMgMTcxLjUyNDI0MywzMjYuOTk2NDUyIEMyNTIuMDIwODczLDMzMC4yODU5NzggMzIyLjY2MDc3MywyNjkuNDI5NzQ0IDMyNy41ODkxMzgsMTg3LjE5MTU5IEMzMzAuODQxODU5LDEwNy40MDQxMzQgMjcxLjMwMDgwMSwzNy4yODg4NzA1IDE5MC40MDk4NiwzMS4xMDY4MDggTDE4Ny45NTIxMjcsMzAuOTM5MDk4MSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjMDA5OTk5Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	mono: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODJweCIgaGVpZ2h0PSI4MnB4IiB2aWV3Qm94PSIwIDAgODIgODIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+UHJvZHVjdCBsb2dvL0NvcmUvbGlnaHQvUHJvZHVjdCBsb2dvX0NvcmVfbGlnaHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9kdWN0LWxvZ28vQ29yZS9saWdodC9Qcm9kdWN0LWxvZ29fQ29yZV9saWdodCIgZmlsbD0iIzAwOTk5OSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQ5LjcwMjM4OTQsMzAuNTM0Mzc1NyBDMzYuOTc5Mjk1OCwzMC4yNDIwMTQ0IDIyLjc2MjgzNzUsNDMuODQ0MDgyNSAxNC4wODgwMDA5LDU1LjgzMDg5NDIgQzE5LjAwMzc0MTYsNjAuODAxMDM1NiAyNy4yNjU4Mjk3LDY1LjE5OTI3NTEgMzQuNzg0MDIxNCw2NS40OTE2MzY0IEM1MC4zOTg3MjcyLDY2LjM2ODcyMDIgNjMuODcxMjg5MSw1NC4yMTU2Mzc5IDY1LjMxNzA5NTIsMzguNzIwNDkxIEM2MS44NDcxNjA2LDM0LjA0MjcxMDggNTcuNTA5NzQyMywzMC44MjY3MzcgNDkuNzAyMzg5NCwzMC41MzQzNzU3IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC43OTU3ODIzNDMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LjgwOTUyNDgsNDIuNzU3MTY3MiBDNjEuNzMzNjIwMSw0NS42NjYxMDA5IDU5LjE0MTM0MTUsNDcuODI2MjM1MiA1Mi4yMDIxMDQ5LDQ4LjAzMzAxNzUgQzQ1LjI2Mjg2ODIsNDguMjM5Nzk5OSAzMy44ODE2NDY2LDQwLjkxODA1MzEgMjEuNzU2OTgyOSwzNy4zNDM4OTg5IEMxNS4yNTEwNjU4LDM1LjU1NjgyMTggMTAuNDI4MTQ0Niw0MC4xMjQxOTQxIDcuNDcwOTA5NTgsNDQuNTkxODg2OSBDMTEuMDE5NTkxNiw1Ni4yMDc4ODgxIDIxLjM2OTkxNDMsNjQuODQ1NDI3NSAzNC4wODYwMjUsNjUuNDQxMTE5OSBDNDguNTc2NDc2Nyw2Ni42MzI1MDQ3IDYxLjg1MjI4OTcsNTYuNzU1OTM4IDY0LjgwOTUyNDgsNDIuNzU3MTY3MiBaIiBpZD0i6Lev5b6EIiBmaWxsLW9wYWNpdHk9IjAuNzk1NzgyMzQzIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ny43MzQ3ODc3LDYwLjMwNjg1NTUgTDc5LjY1NDg3MDMsNzAuOTk3MDA0NiBDODIuMTI0NjcyOCw3My4yMTIwODA5IDgyLjMyNDU1NDEsNzYuOTk3MzU1IDgwLjEwMTYyMzcsNzkuNDU3NDQ3NiBDNzcuOTA2MzE0Nyw4MS44ODY5NzE4IDc0LjE2MTY0MTksODIuMTA5MTU5OSA3MS42OTIzMDQ4LDc5Ljk3Mzg1NjEgTDcxLjYwOTM5NTYsNzkuOTAwODQyNiBMNTkuMDIwODA0LDY4LjYwOTg5OTUgQzYyLjMyNjQwMjcsNjYuMjkwNzkyOCA2NS4yNjU1NjM2LDYzLjQ4ODc0NDUgNjcuNzM0Nzg3Nyw2MC4zMDY4NTU1IFoiIGlkPSLlvaLnirbnu5PlkIgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM3LjQzOTk4NzQsNi4xNzc5NzkxNCBDNTMuODI2NTAyNCw3LjE2MjM1MTg5IDY1Ljk1MjUyMzUsMjEuMjcxNjk0NiA2NS4yOTcwNjMsMzcuMzQ5NzgyNyBDNjQuMzEzODcyMSw1My43NTU5OTUxIDUwLjIyMTQ2OTEsNjUuODk2NTkyMyAzNC4xNjI2ODQ0LDY1LjI0MDM0MzkgQzE3Ljc3NjE2OTQsNjQuMjU1OTcxMSA1LjY1MDE0ODI5LDUwLjE0NjYyODQgNi4zMDU2MDg5NCwzNC4wNjg1NDAyIEM2Ljk2MTA2OTU5LDE3Ljk5MDQ1MiAyMS4zODEyMDI4LDUuNTIxNzMwNiAzNy40Mzk5ODc0LDYuMTc3OTc5MTQgTTM3Ljg3NTQwOTEsMC4wNTk3MjE5NTc1IEMxOC4yNTEwNjc5LC0xLjAxMTI2NzggMS4xMjQzNzAxMiwxMy45ODI1ODg3IDAuMDUzOTUxNTEzMSwzMy42MTc0MDA5IEMtMS4wMTY0NjcxLDUzLjI1MjIxMzEgMTMuOTY5MzkzNCw3MC4zODgwNDkgMzMuNTkzNzM0Niw3MS40NTkwMzg4IEM1My4yMTgwNzU4LDcyLjUzMDAyODUgNjkuOTg3OTY3Myw1Ny41MzYxNzIgNzEuNDE1MTkyMSwzNy45MDEzNTk5IEM3Mi44NDI0MTY5LDE4LjI2NjU0NzggNTcuNDk5NzUwMiwxLjQ4NzcwODMyIDM3Ljg3NTQwOTEsMC4wNTk3MjE5NTc1IFoiIGlkPSLlvaLnirYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
	inverse: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDIwcHgiIGhlaWdodD0iNDIwcHgiIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlByb2R1Y3QgbG9nb19Db3JlX0Rhcms8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9kdWN0LWxvZ29fQ29yZV9EYXJrIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMjUzLjg2MDU3MywxNTYuOTU0Mzc3IEwyNTUuODIxODI4LDE1Ni45NzgxMDUgQzI5NS4yMzg0NjEsMTU4LjQ1NTc4MyAzMTcuNDIyMzY1LDE3NC40NjkxOTQgMzM1LjA4NzI1MywxOTcuODY5MDMxIEMzMjcuMDAwMzY2LDI3OC45OTgzMjkgMjU2LjE1OTc1MiwzMzguMjU5Njc3IDE3NS43MDc3NjEsMzM0Ljk3MTk3NSBDMTM0Ljc3NDkwMywzMzIuNTEzMDUyIDk5LjAxOTMxMDYsMzE0LjEwNDkzMiA3My40NzgxMzk4LDI4Ni4zNDI1ODQgQzExNy4xNTEyOSwyMjYuMTMwMDIzIDE4Ny44NDI0MzMsMTU4LjI1NDUzMiAyNTEuOTA4MDEsMTU2Ljk3Mjc0MyBMMjUzLjg2MDU3MywxNTYuOTU0Mzc3IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC44MDI5MzkyNDgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM5LjU1ODIxNzIsMjI3LjQ4Mjk4IEwzOS41ODgzNTkzLDIyNy40NDExNzcgQzU0Ljg0NTE2OCwyMDQuOTc4MDkzIDc5LjI4NDgzNjEsMTgyLjY1OTg0MiAxMTIuMDI0NDIzLDE5MS42NDIyNSBDMTc0LjI4NDMwNCwyMDkuOTczNjk0IDIzMi43MjY2MjcsMjQ3LjUyNjEyOSAyNjguMzU5NDU0LDI0Ni40NjU1NjUgQzMwMi4yNzE0NTgsMjQ1LjQ1NjIxOSAzMTUuOTY1ODI2LDIzNS4zNzI2MzQgMzMwLjgyNDUyOSwyMjEuNTQwMjg4IEMzMTIuNzE3NTU0LDI5MC4yMzg4MiAyNDguMTA0MTQ3LDMzNy45MzA0ODIgMTc1LjcwNzc2MSwzMzQuOTcxOTc1IEMxMTAuMTM3MjAzLDMzMS4wMzMwMTMgNTcuODUyMDI2NiwyODYuMTY2ODEzIDM5LjU1ODIxNzIsMjI3LjQ4Mjk4IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC44MDI5MzkyNDgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM0OC4wOTk0NzEsMzEwLjkyMzM5OSBMNDA5LjM1OTk2NSwzNjUuOTgyNDA1IEM0MjIuMDUzMTcsMzc3LjM5MDczNCA0MjMuMDgwNDMyLDM5Ni44ODYwNjkgNDExLjY1NTk5MSw0MDkuNTU2MzA4IEM0MDAuMzczNTA4LDQyMi4wNjkxMSAzODEuMTI4Mjg1LDQyMy4yMTM0NDggMzY4LjQzNzQ3Myw0MTIuMjE1OTcyIEwzNjguMDExMzcyLDQxMS44Mzk5MjkgTDMwMy4zMTE5ODgsMzUzLjY4OTUzNSBDMzIwLjMwMTk4OSwzNDEuNzQ0Nzg2IDMzNS40MDg0OTMsMzI3LjMxMjM3IDM0OC4wOTk0NzEsMzEwLjkyMzM5OSBaIE0wLjU2MzQ0NzYxMSwxNzIuNTkxODk5IEM2LjA1OTkyMDcxLDcxLjc2OTQ1ODUgOTQuMDAzNDkwMiwtNS4yMjIyMjMzOSAxOTQuNzcyMTY0LDAuMjc3MTgyNDYzIEMyOTUuNTQwODM3LDcuNjA5NzIzNzQgMzc0LjMyMzYxOCw5My43NjcwODI0IDM2Ni45OTQ5ODcsMTk0LjU4OTUyMyBDMzU5LjY2NjM1NywyOTUuNDExOTYzIDI3My41NTQ5NDUsMzcyLjQwMzY0NSAxNzIuNzg2MjcxLDM2Ni45MDQyMzkgQzcyLjAxNzU5NzgsMzYxLjQwNDgzMyAtNC45MzMwMjU0OCwyNzMuNDE0MzQgMC41NjM0NDc2MTEsMTcyLjU5MTg5OSBaIE0xOTIuNTM2MzI1LDMxLjY5MzcxMDMgQzExMC4wNzYzNjMsMjguMzIzOTUxNSAzNi4wMzA2ODI5LDkyLjM0OTM2MjkgMzIuNjY0OTY5OSwxNzQuOTA4NDQ2IEMyOS4yOTkyNTY5LDI1Ny40Njc1MyA5MS41NjQ5NDI4LDMyOS45MTczMzcgMTc1LjcwNzc2MSwzMzQuOTcxOTc1IEMyNTguMTY3NzI0LDMzOC4zNDE3MzQgMzMwLjUzMDU0OCwyNzYuMDAxMjAxIDMzNS41NzkxMTcsMTkxLjc1NzIzOSBDMzM4LjkxMTE3MiwxMTAuMDIzNzQ3IDI3Ny45MTc4OTQsMzguMTk4MzU1MSAxOTUuMDU0MDAzLDMxLjg2NTUxMDcgTDE5Mi41MzYzMjUsMzEuNjkzNzEwMyBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	closeLight: 'data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Ni4wOTYgNDk2LjA5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI0OTYuMDk2IiBoZWlnaHQ9IjQ5Ni4wOTYiPjxyZWN0IGlkPSJiYWNrZ3JvdW5kcmVjdCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIi8+CgoKCgoKCgoKCgoKCgoKCgo8ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PGcgaWQ9InN2Z18xIiBjbGFzcz0ic2VsZWN0ZWQiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+Cgk8ZyBpZD0ic3ZnXzIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+CgkJPHBhdGggZD0iTTI1OS40MSwyNDcuOTk4TDQ5My43NTQsMTMuNjU0YzMuMTIzLTMuMTI0LDMuMTIzLTguMTg4LDAtMTEuMzEyYy0zLjEyNC0zLjEyMy04LjE4OC0zLjEyMy0xMS4zMTIsMEwyNDguMDk4LDIzNi42ODYgICAgTDEzLjc1NCwyLjM0MkMxMC41NzYtMC43MjcsNS41MTItMC42MzksMi40NDIsMi41MzljLTIuOTk0LDMuMS0yLjk5NCw4LjAxNSwwLDExLjExNWwyMzQuMzQ0LDIzNC4zNDRMMi40NDIsNDgyLjM0MiAgICBjLTMuMTc4LDMuMDctMy4yNjYsOC4xMzQtMC4xOTYsMTEuMzEyczguMTM0LDMuMjY2LDExLjMxMiwwLjE5NmMwLjA2Ny0wLjA2NCwwLjEzMi0wLjEzLDAuMTk2LTAuMTk2TDI0OC4wOTgsMjU5LjMxICAgIGwyMzQuMzQ0LDIzNC4zNDRjMy4xNzgsMy4wNyw4LjI0MiwyLjk4MiwxMS4zMTItMC4xOTZjMi45OTUtMy4xLDIuOTk1LTguMDE2LDAtMTEuMTE2TDI1OS40MSwyNDcuOTk4eiIgZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z18zIiBmaWxsLW9wYWNpdHk9IjEiLz4KCTwvZz4KPC9nPjxnIGlkPSJzdmdfNCI+CjwvZz48ZyBpZD0ic3ZnXzUiPgo8L2c+PGcgaWQ9InN2Z182Ij4KPC9nPjxnIGlkPSJzdmdfNyI+CjwvZz48ZyBpZD0ic3ZnXzgiPgo8L2c+PGcgaWQ9InN2Z185Ij4KPC9nPjxnIGlkPSJzdmdfMTAiPgo8L2c+PGcgaWQ9InN2Z18xMSI+CjwvZz48ZyBpZD0ic3ZnXzEyIj4KPC9nPjxnIGlkPSJzdmdfMTMiPgo8L2c+PGcgaWQ9InN2Z18xNCI+CjwvZz48ZyBpZD0ic3ZnXzE1Ij4KPC9nPjxnIGlkPSJzdmdfMTYiPgo8L2c+PGcgaWQ9InN2Z18xNyI+CjwvZz48ZyBpZD0ic3ZnXzE4Ij4KPC9nPjwvZz48L3N2Zz4=',
	closeDark: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Ni4wOTYgNDk2LjA5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2LjA5NiA0OTYuMDk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU5LjQxLDI0Ny45OThMNDkzLjc1NCwxMy42NTRjMy4xMjMtMy4xMjQsMy4xMjMtOC4xODgsMC0xMS4zMTJjLTMuMTI0LTMuMTIzLTguMTg4LTMuMTIzLTExLjMxMiwwTDI0OC4wOTgsMjM2LjY4NiAgICBMMTMuNzU0LDIuMzQyQzEwLjU3Ni0wLjcyNyw1LjUxMi0wLjYzOSwyLjQ0MiwyLjUzOWMtMi45OTQsMy4xLTIuOTk0LDguMDE1LDAsMTEuMTE1bDIzNC4zNDQsMjM0LjM0NEwyLjQ0Miw0ODIuMzQyICAgIGMtMy4xNzgsMy4wNy0zLjI2Niw4LjEzNC0wLjE5NiwxMS4zMTJzOC4xMzQsMy4yNjYsMTEuMzEyLDAuMTk2YzAuMDY3LTAuMDY0LDAuMTMyLTAuMTMsMC4xOTYtMC4xOTZMMjQ4LjA5OCwyNTkuMzEgICAgbDIzNC4zNDQsMjM0LjM0NGMzLjE3OCwzLjA3LDguMjQyLDIuOTgyLDExLjMxMi0wLjE5NmMyLjk5NS0zLjEsMi45OTUtOC4wMTYsMC0xMS4xMTZMMjU5LjQxLDI0Ny45OTh6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
	gridView: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM1OSAzNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1OSAzNTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik05NiwwSDEzQzcuNSwwLDMsNC41LDMsMTB2ODNjMCw1LjUsNC41LDEwLDEwLDEwaDgzYzUuNSwwLDEwLTQuNSwxMC0xMFYxMEMxMDYsNC41LDEwMS41LDAsOTYsMHogTTg3LDg0SDIzVjIwaDY0Vjg0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIyMSwwaC04M2MtNS41LDAtMTAsNC41LTEwLDEwdjgzYzAsNS41LDQuNSwxMCwxMCwxMGg4M2M1LjUsMCwxMC00LjUsMTAtMTBWMTBDMjMxLDQuNSwyMjYuNSwwLDIyMSwweiBNMjEyLDg0aC02NFYyMCAgICBoNjRWODR6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNOTYsMTI2SDEzYy01LjUsMC0xMCw0LjUtMTAsMTB2ODNjMCw1LjUsNC41LDEwLDEwLDEwaDgzYzUuNSwwLDEwLTQuNSwxMC0xMHYtODNDMTA2LDEzMC41LDEwMS41LDEyNiw5NiwxMjZ6IE04NywyMDlIMjMgICAgdi02M2g2NFYyMDl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjIxLDEyNmgtODNjLTUuNSwwLTEwLDQuNS0xMCwxMHY4M2MwLDUuNSw0LjUsMTAsMTAsMTBoODNjNS41LDAsMTAtNC41LDEwLTEwdi04M0MyMzEsMTMwLjUsMjI2LjUsMTI2LDIyMSwxMjZ6ICAgICBNMjEyLDIwOWgtNjR2LTYzaDY0VjIwOXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNDYsMGgtODNjLTUuNSwwLTEwLDQuNS0xMCwxMHY4M2MwLDUuNSw0LjUsMTAsMTAsMTBoODNjNS41LDAsMTAtNC41LDEwLTEwVjEwQzM1Niw0LjUsMzUxLjUsMCwzNDYsMHogTTMzNyw4NGgtNjRWMjAgICAgaDY0Vjg0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM0NiwxMjZoLTgzYy01LjUsMC0xMCw0LjUtMTAsMTB2ODNjMCw1LjUsNC41LDEwLDEwLDEwaDgzYzUuNSwwLDEwLTQuNSwxMC0xMHYtODNDMzU2LDEzMC41LDM1MS41LDEyNiwzNDYsMTI2eiAgICAgTTMzNywyMDloLTY0di02M2g2NFYyMDl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNOTYsMjU2SDEzYy01LjUsMC0xMCw0LjUtMTAsMTB2ODNjMCw1LjUsNC41LDEwLDEwLDEwaDgzYzUuNSwwLDEwLTQuNSwxMC0xMHYtODNDMTA2LDI2MC41LDEwMS41LDI1Niw5NiwyNTZ6IE04NywzNDBIMjMgICAgdi02NGg2NFYzNDB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjIxLDI1NmgtODNjLTUuNSwwLTEwLDQuNS0xMCwxMHY4M2MwLDUuNSw0LjUsMTAsMTAsMTBoODNjNS41LDAsMTAtNC41LDEwLTEwdi04M0MyMzEsMjYwLjUsMjI2LjUsMjU2LDIyMSwyNTZ6ICAgICBNMjEyLDM0MGgtNjR2LTY0aDY0VjM0MHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNDYsMjU2aC04M2MtNS41LDAtMTAsNC41LTEwLDEwdjgzYzAsNS41LDQuNSwxMCwxMCwxMGg4M2M1LjUsMCwxMC00LjUsMTAtMTB2LTgzQzM1NiwyNjAuNSwzNTEuNSwyNTYsMzQ2LDI1NnogICAgIE0zMzcsMzQwaC02NHYtNjRoNjRWMzQweiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
	listView: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM0My41IDM0My41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDMuNSAzNDMuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMyMi4wNSwxNjEuOGgtMTgyLjZjLTUuNSwwLTEwLDQuNS0xMCwxMHM0LjUsMTAsMTAsMTBoMTgyLjZjNS41LDAsMTAtNC41LDEwLTEwQzMzMi4wNSwxNjYuMywzMjcuNjUsMTYxLjgsMzIyLjA1LDE2MS44ICAgIHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01Ny45NSwxMjUuM2MtMjUuNywwLTQ2LjUsMjAuOC00Ni41LDQ2LjVzMjAuOCw0Ni41LDQ2LjUsNDYuNXM0Ni41LTIwLjgsNDYuNS00Ni41UzgzLjY1LDEyNS4zLDU3Ljk1LDEyNS4zeiAgICAgTTU3Ljk1LDE5OC4zYy0xNC43LDAtMjYuNS0xMS45LTI2LjUtMjYuNWMwLTE0LjcsMTEuOS0yNi41LDI2LjUtMjYuNWMxNC42LDAsMjYuNSwxMS45LDI2LjUsMjYuNVM3Mi41NSwxOTguMyw1Ny45NSwxOTguM3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMjIuMDUsMzYuOGgtMTgyLjZjLTUuNSwwLTEwLDQuNS0xMCwxMHM0LjUsMTAsMTAsMTBoMTgyLjZjNS41LDAsMTAtNC41LDEwLTEwQzMzMi4wNSw0MS4zLDMyNy42NSwzNi44LDMyMi4wNSwzNi44eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTU3Ljk1LDBjLTI1LjcsMC00Ni41LDIwLjgtNDYuNSw0Ni41YzAsMjUuNywyMC44LDQ2LjUsNDYuNSw0Ni41czQ2LjUtMjAuOCw0Ni41LTQ2LjVDMTA0LjQ1LDIwLjksODMuNjUsMC4xLDU3Ljk1LDB6ICAgICBNNTcuOTUsNzMuMWMtMTQuNywwLTI2LjUtMTEuOS0yNi41LTI2LjVjMC0xNC42LDExLjktMjYuNSwyNi41LTI2LjVjMTQuNywwLDI2LjUsMTEuOSwyNi41LDI2LjUgICAgQzg0LjQ1LDYxLjIsNzIuNTUsNzMuMSw1Ny45NSw3My4xeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMyMi4wNSwyODYuOGgtMTgyLjZjLTUuNSwwLTEwLDQuNS0xMCwxMHM0LjUsMTAsMTAsMTBoMTgyLjZjNS41LDAsMTAtNC41LDEwLTEwUzMyNy42NSwyODYuOCwzMjIuMDUsMjg2Ljh6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTcuOTUsMjUwLjVjLTI1LjcsMC00Ni41LDIwLjgtNDYuNSw0Ni41YzAsMjUuNywyMC44LDQ2LjUsNDYuNSw0Ni41czQ2LjUtMjAuOCw0Ni41LTQ2LjUgICAgQzEwNC40NSwyNzEuNCw4My42NSwyNTAuNSw1Ny45NSwyNTAuNXogTTU3Ljk1LDMyMy42Yy0xNC43LDAtMjYuNS0xMS45LTI2LjUtMjYuNWMwLTE0LjcsMTEuOS0yNi41LDI2LjUtMjYuNSAgICBjMTQuNywwLDI2LjUsMTEuOSwyNi41LDI2LjVTNzIuNTUsMzIzLjYsNTcuOTUsMzIzLjZ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
}

let baseStyles = `
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap');
@keyframes jina-bg-rotate {
	100% {
		transform: rotate(1turn);
	}
}
.jina-bg-default {
    position: relative;
    border-radius: 100px;
    border-color: #dbdbdb;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
}
.jina-theme-persian .jina-bg-default{
	border-color: #009999;
}
.jina-theme-pompelmo .jina-bg-default{
	border-color: #FF6666;
}
.jina-theme-honeybee .jina-bg-default{
	border-color: #FFCC66;
}
.jina-bg-rainbow {
    position: relative;
    z-index: 0;
    border-radius: 50px;
    overflow-y: hidden;
    padding: 1px;
}
.jina-bg-rainbow:before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -450%;
    width: 200%;
    height: 1000%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
    animation: jina-bg-rotate 4s linear infinite;
}
.jina-bg-rainbow:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: white;
    border-radius: 50px;
}
.jina-search-input::placeholder {
    opacity: .5;
    font-weight: 700;
    font-size: .75em;
    line-height:1.5;
}

.jina-sea {
    width: 300px;
    height: 300px;
    background-color: white;
    background-image: linear-gradient(#8e9eab, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.5));
    position: relative;
}
.jina-theme-persian .jina-sea{
	backgrond-image: linear-gradient(#009999, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.5));
}
.jina-theme-pompelmo .jina-sea{
	background-image: linear-gradient(#ff6666, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.5));
}
.jina-theme-honeybee .jina-sea{
	background-image: linear-gradient(#ffcc66, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.5));
}

.jina-sea .title {
    color: white;
    font-size: 24px;
    font-family: Comfortaa;
    text-align: center;
    line-height: 250px;
    position: absolute;
    z-index: 1;
    width: 100%;
}
.jina-sea .jina-wave {
    position: absolute;
    top: -250px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: #8e9eab;
    border-radius: 35%;
    filter: opacity(0.4);
    animation: jina-drift linear infinite;
    transform-origin: 50% 48%;
}
.jina-theme-persian .jina-sea .jina-wave{
	background: #009999;
}
.jina-theme-pompelmo .jina-sea .jina-wave{
	background: #ff6666;
}
.jina-theme-honeybee .jina-sea .jina-wave{
	background: #ffcc66;
}

.jina-sea .jina-wave:nth-of-type(1) {
    animation-duration: 5s;
}
.jina-sea .jina-wave:nth-of-type(2) {
    animation-duration: 7s;
}
.jina-sea .jina-wave:nth-of-type(3) {
    animation-duration: 9s;
    background-color: #009999;
    filter: opacity(0.1);
}
.jina-theme-persian .jina-sea .jina-wave:nth-of-type(3) {
	background: #009999 !important;
}
.jina-theme-pompelmo .jina-sea .jina-wave:nth-of-type(3) {
	background: #ff6666 !important;
}
.jina-theme-honeybee .jina-sea .jina-wave:nth-of-type(3) {
	background: #ffcc66 !important;
}

@keyframes jina-drift {
    from {
        transform: rotate(360deg);
    }
}
.jina-floater-container {
    font-family: Comfortaa;
    position: fixed;
    bottom: 2em;
    right: 2em;
}
.jina-floater {
    background: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    overflow: hidden;
}
.jina-theme-persian .jina-floater{
	background: #009999;
}
.jina-theme-pompelmo .jina-floater {
	background: #ff6666;
}
.jina-theme-honeybee .jina-floater {
	background: #ffcc66;
}
.jina-floater-icon {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 1em;
    left: 1em;
    transition: .2s;
}
.jina-floater {
    transition: .2s;
}
.jina-floater-large {
    width: 14em;
    height: 14em;
    transition: .2s;
}
.jina-floater-large .jina-floater-icon {
    left: 6em;
    top: 3em;
}
.jina-floater-box {
    position: fixed;
    background: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    bottom: 6em;
    right: 2em;
    height: 0px;
    max-height: 65vh;
    width: 300px;
    border-radius: 1em;
    flex-direction: column;
    align-items: stretch;
    font-family: Comfortaa;
    opacity: 0;
    transition: all .2s ease-out;
    display: flex;
    visibility: hidden;
}
.jina-floater-box-visible {
	opacity: 1;
    visibility: visible;
    height: 400px
}
.jina-search-input {
    font-family: Comfortaa;
    font-size: 1em;
    border: none;
    outline: none;
    padding: .5em;
    padding-left: 2.5rem;
    margin: 0px;
    line-height: 1;
    border-width: 1px;
	box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,0.05);
}
.jina-search-input {
    border-color: #d5ac2c;
}
.jina-floater-search-container {
    padding: .5em;
    border-radius: .5em .5em 0em 0em;
    position: relative;
}
.jina-floater-results-container {
    align-content: flex-end;
    border: 1px solid white;
    border-radius: .5em;
    margin: .5em;
		margin-top: 0px;
    height: 100%;
    transition: .2s;
		overflow: hidden;
		display: flex;
		flex-direction: column;
}
.jina-floater-results-container .jina-results-toolbar{
	padding-top: 0px;
}
.jina-floater-file-input {
    display: none;
}
.jina-floater-result, .jina-result {
    margin: .1em;
    border-radius: .25em;
    cursor: pointer;
		transition: .1s;
		text-align: center;
}

.jina-result-video{
	outline: none;
	width: 100%;
	max-height: 300px;
	padding: .5em;
}

.jina-result-audio{
	outline: none;
	padding: .5em;
	max-width: 100%;
}

.jina-result.jina-text-result{
	text-align: left;
	padding: .25em;
	padding-left: .5em;
	padding-right: .5em;
}
.jina-grid-container {
    display: inline-block;
    margin: none;
    width: 33%;
}
.jina-floater-result:hover, .jina-result:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.jina-results-area {
    font-family: Comfortaa;
    padding: .5em;
    height: 100%;
    overflow-y: auto;
}
.jina-highlighted {
    border-color: #009999;
}
.jina-highlighted .jina-floater-instructions{
	color: white;
	opacity: 1;
}

.jina-theme-persian .jina-highlighted {
	border-color: #009999;
}
.jina-theme-pompelmo .jina-highlighted {
	border-color: #FF6666;
}
.jina-theme-honeybee .jina-highlighted {
	border-color: #FFCC66;
}

.jina-theme-persian input :focus {
    border-color: #d5ac2c;
}

.jina-search-icon {
    height: 1.25rem;
    position: absolute;
    top: .5rem;
    left: .65rem;
		padding-right: .25rem;
		cursor: pointer;
}
.jina-border-right {
    border-right: 1px solid #009999;
}
.jina-floater-instructions {
    text-align: center;
    opacity: .5;
	margin-top: 40%;
}
.jina-results-label {
    font-size: .75em;
    text-align: left;
    padding-left: .5em;
    font-family: Comfortaa;
    margin-top: 1em;
    margin-left: .5em;
		opacity: .5;
		z-index: 1;
}
.jina-search-container {
    position: relative;
}
.jina-persian {
    border-color: #009999;
}
.jina-searchbar-container {
    width: 300px;
    position: relative;
    display: inline-block;
}
.jina-expander {
    font-family: Comfortaa;
    background: white;
    position: absolute;
    top: 2.5em;
    width: 100%;
    border-radius: 1.1em;
    padding-top: 0em;
    padding-bottom: 0em;
    text-align: center;
    opacity: 0;
    height: 0px;
    transition: .2s;
    overflow: hidden;
    max-height: 65vh;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    display: flex;
		flex-direction: column;
		z-index: 2;
}
.jina-expander-results-area {
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: .5em;
    flex: fill;
}
.jina-expander-close {
    cursor: pointer;
    color: white;
    padding-top: .5em;
    padding-bottom: .5em;
    background: #009999;
}
.jina-contained {
    width: 100%;
    box-sizing: border-box;
}
.jina-floater-label {
    font-family: Comfortaa;
    text-align: center;
    padding-top: 5em;
    padding-right: 2.5em;
    padding-left: 2.5em;
    opacity: 0;
    font-size: 1px;
    transition: .2s;
    text-transform: uppercase;
    letter-spacing: 3px;
}
.jina-floater-large .jina-floater-label {
    font-size: 1.25em;
    opacity: 1;
}
.jina-expander-label {
    font-family: Comfortaa;
    text-align: center;
    color: white;
}
.jina-dropdown-message {
		text-align: center;
    font-family: Comfortaa;
    padding-top: 9em;
    padding-bottom: 3em;
    padding-right: .5em;
    padding-left: .5em;
    height: 100%;
}
.jina-error {
    background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);;
}
.jina-ready {
    background: #eef2f3;
    color: #000;
}
.jina-theme-persian .jina-ready{
	background: linear-gradient(to bottom right, #009999 40%, #32C8CD 100%);
	color: #fff;
}
.jina-theme-pompelmo .jina-ready{
	background: linear-gradient(to bottom right, #FF6666 40%, #ff8b8b 100%);
	color: #fff;
}
.jina-theme-honeybee .jina-ready{
	background: linear-gradient(to bottom right, #FFCC66 40%, #ffda8f 100%);
	color: #fff;
}

.jina-dropdown-message h4 {
    font-weight: 100;
    letter-spacing: 3px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-transform: uppercase;
}
.jina-dropdown-message button {
		font-family: Comfortaa;
		background: whitesmoke;
    padding: .5em;
    font-size: 1em;
    padding-left: 1em;
    padding-right: 1em;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
}
.jina-face {
    position: absolute;
    width: 4em;
    height: 4em;
    background: white;
    border-radius: 50%;
    top: 4em;
    left: 37.5%;
    z-index: 2;
    animation: jina-animation-bounce 1s ease-in infinite;
}
.jina-shadow {
    position: absolute;
    width: 3.75em;
    height: .75em;
    opacity: .5;
    background: #777777;
    left: 7.25em;
    top: 8em;
    border-radius: 50%;
    z-index: 1;
}
.jina-scale {
    animation: jina-animation-scale 1s ease-in infinite;
}
.jina-move {
    animation: jina-animation-move 3s ease-in-out infinite;
}
.jina-roll {
  animation: jina-animation-roll 3s ease-in-out infinite;
}
@keyframes jina-animation-scale {
    50% {
        transform: scale(0.9);
    }
}
@keyframes jina-animation-move {
    0% {
        left: 25%;
    }
    50% {
        left: 60%;
    }
    100% {
        left: 25%;
    }
}
@keyframes jina-animation-roll {
  0% {
    transform: rotate(0deg);
    left: 25%;
  }
  50% {
    left: 60%;
    transform: rotate(168deg);
  }
  100% {
    transform: rotate(0deg);
    left: 25%;
  }
}
@keyframes jina-animation-bounce {
    50% {
        transform: translateY(-15px);
    }
}
.jina-expander-overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    display: none;
    opacity: 0;
}
.jina-results-toolbar {
		padding-top: .75em;
    padding-right: .5em;
    padding-left: .5em;
    text-align: left;
	display: flex;
	flex-shrink: 0;
    flex-direction: row;
	border-bottom: 1px solid #cfd8dc;
}
.jina-results-tabs {
    overflow-x: auto;
		flex: 1;
		display: block;
}
.jina-results-tab {
    display: inline-block;
    margin: .15em;
    cursor: pointer;
    border-bottom: 2px solid #cfd8dc;
}
.jina-results-tab.jina-active {
    border-bottom-color: #009999;
}
.jina-theme-persian .jina-results-tab.jina-active{
	border-bottom-color: #009999;
}
.jina-theme-pompelmo .jina-results-tab.jina-active{
	border-bottom-color: #FF6666;
}
.jina-theme-honeybee .jina-results-tab.jina-active{
	border-bottom-color: #FFCC66;
}

.jina-results-tab-img {
    width: 2em;
    height: 2em;
    margin-bottom: .25em;
    border-radius: .25em;
}

.jina-results-tab-audio{
	width: 2em;
	height: 2em;
  border-radius: .25em;
}

.jina-results-tab-video{
	width: 2em;
	height: 2em;
  border-radius: .25em;
}

.jina-results-action-button {
		box-sizing: border-box;
    cursor: pointer;
    width: 1.85em;
    height: 1.85em;
    border-radius: 5px;
  	padding: .25em;
}
.jina-results-action-button.jina-active {
    background-color: rgba(0, 153, 153, 0.25);
}
.jina-theme-persian .jina-results-action-button.jina-active {
	background-color: rgba(0, 153, 153, 0.25);
}
.jina-theme-pompelmo .jina-results-action-button.jina-active {
	background-color: rgba(255, 102, 102, 0.25);;
}
.jina-theme-honeybee .jina-results-action-button.jina-active {
	background-color: rgba(255, 204, 102, 0.25);
}

.eye {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #777777;
  border-radius: 50%;
  top: 40%;
  left: 20%;
}
.right {
  left: 68%;
}
.mouth {
  position: absolute;
  top: 43%;
  left: 41%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.happy {
  border: 2px solid;
  border-color: transparent #777777 #777777 transparent;
  transform: rotate(45deg);
}
.sad {
  top: 49%;
  border: 2px solid;
  border-color: #777777 transparent transparent #777777;
  transform: rotate(45deg);
}
.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.jina-scrollable{
	overflow-y: auto;
}
.jina-select{
	padding: .5em;
	margin-bottom: .5em;
	max-width: 50%;
}
.jina-small{
	font-size: .75em;
}
.jina-action-button{
	background-color: #009999;
	border: none;
	padding: .5em;
	color: white;
	border-radius: .5em;
	margin: .5em;
	display: block;
	outline: none !important;
	margin-left: auto;
	margin-right: auto;
}
.jina-media-controls{
	position: absolute;
	bottom: 0;
	width: 100%;
	padding-bottom: 20px;
}
.jina-media-button{
	border: none;
	outline: none !important;
	width: 4em;
	height: 4em;
	border-radius: 50%;
	box-shadow: 0px 0px 10px rgba(0,0,0,.25);
	margin: .5em;
	opacity: .75;
	transition: .2s;
}
.jina-media-button:hover{
	opacity: 1;
}
.jina-input-controls{
	padding-top: .5em;
}
.jina-input-controls .jina-select{
	width: 100%;
}
.jina-media-cancel-button{
	position: absolute;
	background: white;
	margin: .5em;
	left: 0;
	border-radius: 50%;
	padding: .5em;
	border: none !important;
	outline: none !important;
	box-shadow: 0px 0px 10px rgba(0,0,0,.25);
	opacity: .75;
	z-index: 2;
}
.jina-media-live-button{
	position: absolute;
	background: white;
	margin: .5em;
	right: 0;
	border-radius: .25em;
	border: none !important;
	outline: none !important;
	box-shadow: 0px 0px 10px rgba(0,0,0,.25);
	opacity: .75;
	z-index: 2;
}
.jina-media-search-button-container{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	font-size: 1.5em;
	text-align: center;
}
.jina-media-search-button{
	border: none;
	border-radius: 5em;
	outline: none !important;
	padding-left: 1.5em;
	padding-right: 1.5em;
	margin: .5em;
}
.jina-live-container {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	flex: 1;
}
.jina-live-results-area{
	height: 100%;
	max-height: 500px;
	overflow-y: auto;
}
.jina-live-header{
	display: inline-grid;
	grid-template-columns: 33% 33% 33%;
	width: 100%;
	padding-top: .5em;
	padding-bottom: .5em;
}
.jina-live-button{
	border-radius: 50%;
	width: 2.5em;
	height: 2.5em;
	margin-left: .5em;
	margin-right: .5em;
	background: whitesmoke;
	border: none;
	outline: none !important;
}
.jina-live-preview{
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 1em;
	box-shadow: 0px 0px 10px rgba(0,0,0,.25);
	border-radius: .5em;
	transition: .2s;
}
`

let stylesElement = document.createElement('style');
stylesElement.innerHTML = baseStyles
document.body.appendChild(stylesElement);

let defaultPlaceholders = ['type or drag anything to search', 'powered by Jina', 'unleash your curiosity and happy searching'];

let defaultSettings = {
	resultsLocation: 'dropdown',
	typewriterEffect: false,
	typewriterDelayCharacter: 50,
	typewriterDelayItem: 1000,
	userMediaHeight: 500,
	userMediaWidth: 300,
	theme: 'default',
	searchIcon: 'color',
	floaterIcon: 'color',
}

class Floater extends HTMLElement {
	constructor() {
		super();

		this.typeWriter = (text_list, i = 0, text_list_i = 0, delay_next_char = 100, delay_next_item = 1000) => {
			// console.log('floater typewriter ',new Date());
			if (!i) {
				this.searchInput.placeholder = "";
			}
			let txt = text_list[text_list_i];
			if (i < txt.length) {
				this.searchInput.placeholder += txt.charAt(i);
				i++;
				setTimeout(this.typeWriter, delay_next_char, text_list, i, text_list_i, delay_next_char, delay_next_item);
			} else {
				text_list_i++;
				if (typeof text_list[text_list_i] === "undefined") {
					setTimeout(this.typeWriter, delay_next_item, text_list, 0, 0, delay_next_char, delay_next_item);
				} else {
					i = 0;
					setTimeout(this.typeWriter, delay_next_item, text_list, i, text_list_i, delay_next_char, delay_next_item);
				}
			}
		}

		this.search = async (query = [this.searchInput.value], inBytes = false) => {
			console.log('query: ', query);
			if (!inBytes || query.length > 1) {
				console.log('removing search icon')
				this.searchIcon.src = this.originalSearchIcon;
				this.searchIcon.classList.remove('jina-border-right');
			}

			this.showLoading();
			await waitFor(2)
			console.log('searching...');
			let response;
			let startTime = new Date();
			try {
				response = await window.JinaBox.search(query, 16, inBytes);
				this.dropped = false;
			} catch (e) {
				this.dropped = false;
				console.log('error');
				return this.showError(e);
			}
			let endTime = new Date();
			let totalTime = Math.round((endTime - startTime) / 10) / 100;
			console.log('response:', response);
			let results = [];
			let queries = [];
			let totalResults = 0;
			let queriesContainMedia = false;
			let resultsContainText = false;
			let onlyImages = true;
			let { docs } = response.search;
			let { code, description } = response.status || {};
			if (code == 'ERROR')
				return this.showError(description);

			try {
				for (let i = 0; i < docs.length; ++i) {
					let docResults = docs[i];
					let { topkResults, uri, mimeType } = docResults;
					if (docResults.mimeType !== 'text/plain')
						queriesContainMedia = true;
					queries.push({ uri, mimeType });

					for (let j = 0; j < topkResults.length; ++j) {
						const res = topkResults[j];
						if (!results[i])
							results[i] = [];
						if (res.matchDoc.mimeType === 'text/plain')
							resultsContainText = true;
						if (!res.matchDoc.mimeType.startsWith('image'))
							onlyImages = false;

						results[i].push({
							mimeType: res.matchDoc.mimeType,
							data: res.matchDoc.uri,
							text: res.matchDoc.text,
							score: res.score.value,
						});
						totalResults++;
					}
				}
			}
			catch (e) {
				return this.showError('Could not get results')
			}

			for (let i = 0; i < results.length; ++i) {
				results[i] = results[i].sort((a, b) => {
					return b.score - a.score
				});
			}
			this.queries = queries;
			this.results = results;
			this.resultsMeta = { totalTime, totalResults, resultsContainText, queriesContainMedia, onlyImages };

			this.showResults(0);
		}

		this.showError = (message = 'could not reach server') => {
			this.dropArea.innerHTML = `
			<div class="jina-dropdown-message jina-error unselectable">
    		<div class="jina-face jina-roll"><div class="eye"></div><div class="eye right"></div><div class="mouth sad"></div>
        	</div>
   			<div class="jina-shadow jina-move"></div>
				<h4 class="alert">Error!</h4>
				<p>${message}</p>
				<button id="jina-floater-error-ok">Ok</button>
			</div>
		`
			this.errorButton = document.getElementById('jina-floater-error-ok')
			this.errorButton.onclick = this.clearDropArea;
		}

		this.showLoading = (message = "Searching") => {
			this.dropArea.innerHTML = `
			<div class="jina-sea">
				<p class="title">${message}</p>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
			</div>
		`
		}

		this.clearDropArea = () => {
			this.dropArea.classList.remove('jina-scrollable');
			this.dropArea.innerHTML = `
			<input type="file" id="jina-floater-file-input" class="jina-floater-file-input" multiple>
				<h3 class="jina-floater-instructions">Drop here to search</h3>
				`
		}

		this.showResults = (index = this.resultsIndex) => {
			//TODO: settings > expander height
			this.resultsIndex = index;
			let resultsHTML = '';
			let toolbar;
			let results = this.results;
			let queries = this.queries;
			let { totalResults, totalTime, onlyImages, queriesContainMedia } = this.resultsMeta;

			if (queries.length > 1 || queriesContainMedia) {
				toolbar = `
				<div class="jina-results-toolbar">
					<div class="jina-results-tabs">`;

				if (queriesContainMedia)
					for (let i = 0; i < queries.length; ++i) {
						toolbar += this.renderPreviewTab(queries[i], i, index === i);
					}
				if (onlyImages)
					toolbar += `
					</div>
					<img class="jina-results-action-button${this.resultsView === 'list' ? ' jina-active' : ''}" src="${_icons.listView}" id="jina-toolbar-button-list" draggable="false">
					<img class="jina-results-action-button${this.resultsView === 'grid' ? ' jina-active' : ''}" src="${_icons.gridView}" id="jina-toolbar-button-grid" draggable="false">`

				toolbar += '</div></div>'
			}

			resultsHTML += `<p class="jina-results-label">${totalResults} results in ${totalTime} seconds</p>`;

			for (let i = 0; i < results[index].length; ++i) {
				let result = results[index][i];
				result.index = i;
				resultsHTML += this.renderResult(result);
			}

			this.dropArea.innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
			if (toolbar) {
				for (let i = 0; i < queries.length; ++i) {
					document.getElementById(`jina-results-tab-${i}`).addEventListener('click', () => this.showResults(i));
				}
				if (onlyImages) {
					document.getElementById("jina-toolbar-button-list").addEventListener('click', () => this.setResultsView('list'));
					document.getElementById("jina-toolbar-button-grid").addEventListener('click', () => this.setResultsView('grid'));
				}
			}

			results[index].map((result, idx) => {
				let resultElement = document.getElementById(`jina-result-${idx}`);
				resultElement.addEventListener('click', () => {
					if (result.mimeType.startsWith('text')) {
						this.searchInput.value = result.text;
						this.search()
					} else {
						this.search([result.data], true);
						this.searchIcon.src = result.data;
						this.searchIcon.classList.add('jina-border-right');
					}
				});
			})
		}

		this.renderResult = (result) => {
			if (result.mimeType.startsWith('text')) {
				return `<div class="jina-result jina-text-result" id="jina-result-${result.index}">${result.text}</div>`
			}
			else if (result.mimeType.startsWith('image')) {
				if (this.resultsView === 'grid')
					return `<div class="jina-grid-container"><div class="jina-result" id="jina-result-${result.index}"><img src="${result.data}" class="jina-result-image"/></div></div>`
				else
					return `<div class="jina-result" id="jina-result-${result.index}"><img src="${result.data}" class="jina-result-image"/></div>`
			}
			else if (result.mimeType.startsWith('audio')) {
				return `<div class="jina-result" id="jina-result-${result.index}"><audio src="${result.data}" class="jina-result-audio" controls></audio></div>`
			}
			else if (result.mimeType.startsWith('video')) {
				return `<div class="jina-result" id="jina-result-${result.index}"><video src="${result.data}" class="jina-result-video" controls autoplay muted loop></video></div>`
			}
		}

		this.renderPreviewTab = (query, i, active) => {
			const { uri, mimeType } = query
			return `
			<div class="jina-results-tab${active ? ' jina-active' : ''}" id="jina-results-tab-${i}">
			${
				(mimeType.startsWith('image')) ?
					`<div class="jina-results-tab-img" style="background:url(${uri});background-size: cover;"></div>`
					:
					(mimeType.startsWith('video')) ?
						`<video class="jina-results-tab-video" src="${uri}" autoplay muted loop></video>`
						:
						(mimeType.startsWith('audio')) ?
							`<audio controls class="jina-results-tab-audio" src="${uri}"></audio>`
							: ''
				}
			</div>`
		}

		this.setResultsView = (view) => {
			localStorage.setItem('jina-floater-results-view', view);
			this.resultsView = view;
			this.showResults();
		}

		this.listenForEnter = (key) => {
			if (key.keyCode == 13) {
				this.search()
			}
		}

		this.preventDefaults = (e) => {
			e.preventDefault()
			e.stopPropagation()
		}

		this.handleDrag = () => {
			this.dragCounter++;
			if (this.showBox) {
				this.highlightArea();
				this.highlightSearch();
			} else {
				this.showLargeFloater();
			}
		}

		this.handleDragLeave = () => {
			this.dragCounter--;
			if (this.dragCounter < 1) {
				if (this.showBox) {
					this.unhighlightArea();
					this.unhighlightSearch();
				} else {
					this.hideLargeFloater();
				}
				this.dragCounter = 0;
			}
		}

		this.handleDrop = async (e) => {
			this.dropped = true;
			console.log('handle drop files');
			console.log('drop event:', e);
			let dt = e.dataTransfer;
			let imgsrc = dt.getData('URL');
			console.log('imgsrc: ', imgsrc)
			if (!this.showBox) {
				console.log('toggling')
				this.toggleShow()
			}
			if (imgsrc) {
				if (imgsrc.startsWith('data:')) {
					this.search([imgsrc], true);
					this.searchIcon.src = imgsrc;
					this.searchIcon.classList.add('jina-border-right');
				} else {
					let dataURI;
					try {
						dataURI = await getDataUri(imgsrc);
					} catch (e) {
						dataURI = imgsrc;
					}
					console.log('dataUri:', dataURI);
					this.searchIcon.src = dataURI;
					this.searchIcon.classList.add('jina-border-right');
					this.search([imgsrc], true);
				}
			} else {
				let acceptedFiles = dt.files;
				let processedFiles = [];
				console.log('files: ', acceptedFiles)
				for (let i = 0; i < acceptedFiles.length; ++i) {
					const file = acceptedFiles[i];
					let reader = new FileReader();
					reader.addEventListener("load", () => {
						const processed = reader.result;
						processedFiles.push(processed);
						if (processedFiles.length === acceptedFiles.length) {
							this.search(processedFiles, true)
							if (processedFiles.length < 2) {
								this.searchIcon.src = processedFiles[0];
								this.searchIcon.classList.add('jina-border-right');
							}
						}
						console.log('processed: ', processed);
					}, false);
					reader.readAsDataURL(file);
				}
			}
		}

		this.toggleShow = () => {
			console.log('toggle show');
			this.hideLargeFloater();
			this.showBox = !this.showBox;
			if (this.showBox) {
				this.floaterBox.classList.add('jina-floater-box-visible');
				document.querySelector('#jina-floater-icon img').src = this.closeIcon;
			} else {
				this.clearDropArea();
				this.floaterBox.classList.remove('jina-floater-box-visible');
				document.querySelector('#jina-floater-icon img').src = this.floaterIcon;
			}
		}

		this.showLargeFloater = () => {
			this.jinaButton.classList.add('jina-floater-large')
			this.jinaButton.classList.add('jina-ready')
		}

		this.hideLargeFloater = () => {
			this.jinaButton.classList.remove('jina-floater-large')
			this.jinaButton.classList.remove('jina-ready')
		}

		this.highlightArea = () => {
			this.dropArea.classList.add('jina-highlighted')
			this.dropArea.classList.add('jina-ready')
		}
		this.unhighlightArea = () => {
			this.dropArea.classList.remove('jina-highlighted')
			this.dropArea.classList.remove('jina-ready')
		}

		this.highlightSearch = () => {
			// this.searchBackground.classList.add('jina-bg-rainbow');
			this.searchInput.classList.add('jina-highlighted')
		}
		this.unhighlightSearch = () => {
			// this.searchBackground.classList.remove('jina-bg-rainbow');
			this.searchInput.classList.remove('jina-highlighted')
		}

		this.settings = {};

		let options = Object.keys(defaultSettings);
		for (let i = 0; i < options.length; ++i) {
			const attr = options[i];
			this.settings[attr] = this.getAttribute(attr) || defaultSettings[attr];
		}

		if (!this.getAttribute('floaterIcon')) {
			if (this.settings.theme !== 'default') {
				this.settings.floaterIcon = 'inverse';
			}
		}

		if (this.settings.theme !== 'default')
			this.closeIcon = _icons.closeLight;
		else
			this.closeIcon = _icons.closeDark;

		this.floaterIcon = _icons[this.settings.floaterIcon] || this.settings.floaterIcon;
		const searchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;

		this.originalSearchIcon = searchIcon;

		this.innerHTML = `
		<div class="jina-floater-container jina-theme-${this.settings.theme}">
			<div class="jina-floater" id="jina-floater-icon">
				<img src="${this.floaterIcon}" class="jina-floater-icon"/>
				<h4 class="jina-floater-label">Drop here</h4>
			</div>
		</div>
		<div class="jina-floater-box jina-theme-${this.settings.theme}" id="jina-floater-box">
			<div class="jina-floater-search-container">
				<div id="jina-floater-background-search-container" class="jina-bg-default">
					<div class="jina-search-container">
						<img src="${searchIcon}" class="jina-search-icon" id="jina-floater-search-icon" onerror="this.src='${this.originalSearchIcon}'"/>
						<input placeholder="type or drop to search" class="jina-search-input jina-contained" id="jina-floater-search-box" autocomplete="off">
					</div>
				</div>
			</div>
			<div class="jina-floater-results-container" id="jina-floater-drop-area">
				<input type="file" id="jina-floater-file-input" class="jina-floater-file-input" multiple>
				<h3 class="jina-floater-instructions">Drop here to search</h3>
			</div>
		</div>
		`;

		this.showBox = false;
		this.dragCounter = 0;

		this.jinaButton = document.getElementById('jina-floater-icon');
		this.dropArea = document.getElementById('jina-floater-drop-area');
		this.searchInput = document.getElementById('jina-floater-search-box');
		this.searchBackground = document.getElementById('jina-floater-background-search-container');
		this.floaterBox = document.getElementById('jina-floater-box');
		this.searchIcon = document.getElementById('jina-floater-search-icon');

		this.jinaButton.addEventListener('click', this.toggleShow);

		['drag', 'dragenter', 'dragover', 'dragleave', 'dragexit', 'drop'].forEach(eventName => {
			document.addEventListener(eventName, this.preventDefaults, false);
		});
		['dragenter'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDrag, false);
		});
		['dragleave', 'drop', 'dragexit'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDragLeave, false);
		});

		this.dropArea.addEventListener('drop', this.handleDrop, false);
		this.jinaButton.addEventListener('drop', this.handleDrop, false);
		this.searchInput.addEventListener('drop', this.handleDrop, false);

		this.searchInput = document.getElementById('jina-floater-search-box');
		this.searchInput.addEventListener('keydown', this.listenForEnter);
		this.searchInput.addEventListener('focus', this.highlightSearch);
		this.searchInput.addEventListener('blur', this.unhighlightSearch);

		this.resultsView = localStorage.getItem('jina-floater-results-view') || 'list';

		console.log('settings: ', this.settings)
		if (this.settings.typewriterEffect) {
			const placeholders = JSON.parse(this.getAttribute('placeholders'));
			this.typeWriter(placeholders || defaultPlaceholders, 0, 0, this.settings.typewriterDelayCharacter, this.settings.typewriterDelayItem);
		}
	}
}

class SearchBar extends HTMLElement {
	constructor() {
		super();

		this.typeWriter = (text_list, i = 0, text_list_i = 0, delay_next_char = 100, delay_next_item = 1000) => {
			if (!i) {
				this.searchInput.placeholder = "";
			}
			let txt = text_list[text_list_i];
			if (i < txt.length) {
				this.searchInput.placeholder += txt.charAt(i);
				i++;
				setTimeout(this.typeWriter, delay_next_char, text_list, i, text_list_i, delay_next_char, delay_next_item);
			} else {
				text_list_i++;
				if (typeof text_list[text_list_i] === "undefined") {
					setTimeout(this.typeWriter, delay_next_item, text_list, 0, 0, delay_next_char, delay_next_item);
				} else {
					i = 0;
					setTimeout(this.typeWriter, delay_next_item, text_list, i, text_list_i, delay_next_char, delay_next_item);
				}
			}
		}

		this.search = async (query = [this.searchInput.value], inBytes = false) => {
			console.log('query: ', query);
			if (!inBytes || query.length > 1) {
				console.log('removing search icon')
				this.searchIcon.src = this.originalSearchIcon;
				this.searchIcon.classList.remove('jina-border-right');
			}

			console.log('searchType:',this.searchType);
			if (this.searchType !== 'live')
				this.showLoading();

			console.log('searching...');
			let response;
			let startTime = new Date();
			try {
				response = await window.JinaBox.search(query, 16, inBytes);
				this.dropped = false;
			} catch (e) {
				this.dropped = false;
				console.log('error');
				return this.showError(e);
			}
			let endTime = new Date();
			let totalTime = Math.round((endTime - startTime) / 10) / 100;
			console.log('response:', response);
			let results = [];
			let queries = [];
			let totalResults = 0;
			let queriesContainMedia = false;
			let resultsContainText = false;
			let onlyImages = true;
			let { docs } = response.search;
			let { code, description } = response.status || {};
			if (code == 'ERROR')
				return this.showError(description);

			for (let i = 0; i < docs.length; ++i) {
				let docResults = docs[i];
				let { topkResults, uri, mimeType } = docResults;
				if (docResults.mimeType !== 'text/plain')
					queriesContainMedia = true;
				queries.push({ uri, mimeType });

				for (let j = 0; j < topkResults.length; ++j) {
					const res = topkResults[j];
					if (!results[i])
						results[i] = [];
					if (res.matchDoc.mimeType === 'text/plain')
						resultsContainText = true;
					if (!res.matchDoc.mimeType.startsWith('image'))
						onlyImages = false;

					results[i].push({
						mimeType: res.matchDoc.mimeType,
						data: res.matchDoc.uri,
						text: res.matchDoc.text,
						score: res.score.value,
					});
					totalResults++;
				}
			}
			for (let i = 0; i < results.length; ++i) {
				results[i] = results[i].sort((a, b) => {
					return b.score - a.score
				});
			}
			this.queries = queries;
			this.results = results;
			this.resultsMeta = { totalTime, totalResults, resultsContainText, queriesContainMedia, onlyImages };

			this.showResults(0);
		}

		this.setResultsView = (view) => {
			localStorage.setItem('jina-expander-results-view', view);
			this.resultsView = view;
			this.showResults();
		}

		this.listenForEnter = (key) => {
			if (key.keyCode == 13) {
				this.search()
			}
		}

		this.preventDefaults = (e) => {
			e.preventDefault()
			e.stopPropagation()
		}

		this.handleDrop = async (e) => {
			this.dropped = true;
			console.log('handle drop files');
			console.log('drop event:', e);
			let dt = e.dataTransfer;
			let imgsrc = dt.getData('URL');
			console.log('imgsrc: ', imgsrc)
			if (imgsrc) {
				if (imgsrc.startsWith('data:')) {
					this.search([imgsrc], true);
					this.searchIcon.src = imgsrc;
					this.searchIcon.classList.add('jina-border-right');
				} else {
					let dataURI;
					try {
						dataURI = await getDataUri(imgsrc);
					} catch (e) {
						dataURI = imgsrc;
					}
					console.log('dataUri:', dataURI);
					this.searchIcon.src = dataURI;
					this.searchIcon.classList.add('jina-border-right');
					this.search([imgsrc], true);
				}
			} else {
				let acceptedFiles = dt.files;
				let processedFiles = [];
				console.log('files: ', acceptedFiles)
				for (let i = 0; i < acceptedFiles.length; ++i) {
					const file = acceptedFiles[i];
					let reader = new FileReader();
					reader.addEventListener("load", () => {
						const processed = reader.result;
						processedFiles.push(processed);
						if (processedFiles.length === acceptedFiles.length) {
							this.search(processedFiles, true)
							if (processedFiles.length < 2) {
								this.searchIcon.src = processedFiles[0];
								this.searchIcon.classList.add('jina-border-right');
							}
						}
						console.log('processed: ', processed);
					}, false);
					reader.readAsDataURL(file);
				}
			}
		}

		this.handleUpload = (e) => {
			let acceptedFiles = e.target.files;
			let processedFiles = [];
			console.log('files: ', acceptedFiles)
			for (let i = 0; i < acceptedFiles.length; ++i) {
				const file = acceptedFiles[i];
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					processedFiles.push(processed);
					if (processedFiles.length === acceptedFiles.length) {
						this.search(processedFiles, true)
						if (processedFiles.length < 2) {
							this.searchIcon.src = processedFiles[0];
							this.searchIcon.classList.add('jina-border-right');
						}
					}
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(file);
			}
		}

		this.handleDrag = () => {
			this.dragCounter++;
			if (!this.highlighted) {
				this.overlay.style.display = 'block';
				this.overlay.style.opacity = '1';
				this.searchInput.classList.add('jina-highlighted');
				this.expander.style.height = 'auto';
				this.expander.style.opacity = 1;
				this.expander.innerHTML = `
				<div class="jina-dropdown-message jina-ready unselectable">
    			<div class="jina-face"><div class="eye"></div><div class="eye right"></div><div class="mouth happy"></div></div>
    			<div class="jina-shadow jina-scale"></div>
					<h4 class="alert">Drop here</h4>
					<p>Drop any content here from webpage/local to search</p>
				</div>
				`
				this.highlighted = true;
			}
		}

		this.handleDragLeave = () => {
			this.dragCounter--;
			if (this.dragCounter < 1) {
				this.searchInput.classList.remove('jina-highlighted');
				if (!this.dropped) {
					this.overlay.style.display = 'none';
					this.overlay.style.opacity = '0';
					this.expander.style.height = '0px';
					this.expander.style.opacity = 0;
					this.clearExpander();
				}
				this.dragCounter = 0;
			}
		}

		this.showInputOptions = async () => {
			this.overlay.style.display = 'block';
			this.overlay.style.opacity = '1';
			this.expander.style.height = 'auto';
			this.expander.style.opacity = 1;
			this.expander.innerHTML = `
			<div>
				<input type="file" class="jina-floater-file-input" id="jina-expander-file-input" multiple>
				<button class="jina-action-button" id="jina-expander-file-input-trigger">Upload Files</button>
				<button class="jina-action-button" id="jina-expander-capture-media-button">Visual Search</button>
				<button class="jina-action-button" id="jina-expander-capture-screen-button">Audio Search</button>
			</div>
		`;
			document.getElementById('jina-expander-file-input-trigger').onclick = function () { document.getElementById('jina-expander-file-input').click() };
			document.getElementById('jina-expander-file-input').addEventListener('change', this.handleUpload);
			document.getElementById('jina-expander-capture-media-button').addEventListener('click', this.showCaptureScreen);
			document.getElementById('jina-expander-capture-screen-button').addEventListener('click', this.showCaptureScreen);
		}

		this.showCaptureScreen = async () => {

			try {
				if (this.videoSource === 'screen') {
					this.showLoading('Accessing Screen Media');
					this.mediaStream = await this.getScreenMediaStream();
				}
				else {
					this.showLoading('Accessing Device Media');
					this.mediaStream = await this.getUserMediaStream();
				}
			}
			catch (e) {
				return this.showError('Could not access media. Please ensure permission is granted.')
			}


			console.log('audio tracks: ', this.mediaStream.getAudioTracks());
			console.log('video tracks: ', this.mediaStream.getVideoTracks());

			this.overlay.style.display = 'block';
			this.overlay.style.opacity = '1';
			this.expander.style.height = 'auto';
			this.expander.style.opacity = 1;
			this.expander.innerHTML = `
			<div>
				<canvas id="jina-media-capture-canvas">
				</canvas>
				
				<div class="jina-input-controls">
					<div>
						<img src="assets/camera.svg"/>
						<select class="jina-select jina-small" id="jina-video-select">
						</select>
					</div>
					<div>
						<img src="assets/mic.svg"/>
						<select class="jina-select jina-small" id="jina-audio-select">
						</select>
					</div>
				</div>
				<div class="jina-media-preview-container">
					<button class="jina-media-live-button" id="jina-media-live-button">
					Live Search
					</button>
					<video id="jina-capture-preview" autoplay muted width="100%" style="display: block;"/>
				</div>
				<div class="jina-media-controls" id="jina-media-controls">
				<button class="jina-media-button" id="jina-take-photo-button"><img src="assets/camera.svg"></button>
				<button class="jina-media-button" id="jina-record-video-button"><img src="assets/video.svg"></button>
				</div>
			</div>
			`
			let capturePreview = document.getElementById('jina-capture-preview');
			this.audioSelect = document.getElementById('jina-audio-select');
			this.videoSelect = document.getElementById('jina-video-select');
			this.captureCanvas = document.getElementById('jina-media-capture-canvas');
			this.captureCanvas.width = 0;
			this.captureCanvas.height = 0;
			this.captureCanvas.style.display = 'none';

			this.audioSelect.onchange = () => this.updateStreamSource(this.showCaptureScreen);
			this.videoSelect.onchange = () => this.updateStreamSource(this.showCaptureScreen);

			document.getElementById('jina-capture-preview').srcObject = this.mediaStream;
			await this.getMediaDevices();

			if (this.audioSource) {
				this.audioSelect.selectedIndex = [...this.audioSelect.options].findIndex(option => option.value === this.audioSource);
			}
			if (this.videoSource) {
				this.videoSelect.selectedIndex = [...this.videoSelect.options].findIndex(option => option.value === this.videoSource);
			}

			if (this.videoSource === 'screen') {
				document.getElementById('jina-take-photo-button').onclick = () => this.capturePhoto(capturePreview.videoWidth, capturePreview.videoHeight);
				document.getElementById('jina-record-video-button').onclick = () => this.startMediaRecord(capturePreview.videoWidth, capturePreview.videoHeight);
			}
			else {
				document.getElementById('jina-take-photo-button').onclick = () => this.capturePhoto();
				document.getElementById('jina-record-video-button').onclick = () => this.startMediaRecord();
			}
			document.getElementById('jina-media-live-button').onclick = this.showLiveSearch;
		}

		this.showLiveSearch = async () => {

			console.log('audio tracks: ', this.mediaStream.getAudioTracks());
			console.log('video tracks: ', this.mediaStream.getVideoTracks());

			this.overlay.style.display = 'block';
			this.overlay.style.opacity = '1';
			this.expander.style.height = 'auto';
			this.expander.style.opacity = 1;
			this.expander.innerHTML = `
			<div class="jina-live-container">
				<canvas id="jina-media-capture-canvas">
				</canvas>
				<div class="jina-live-header">
					<div class="jina-live-header-item" style="text-align: left;">
						<button class="jina-live-button" id="jina-live-cancel-button">
							<img src="assets/x.svg">
						</button>
					</div>
					<div class="jina-live-header-item" style="margin-top: .5em">
						Live Search
					</div>
					<div class="jina-live-header-item" style="text-align: right;">
						<button class="jina-live-button" id="jina-live-toggle-button">
							<img src="assets/pause.svg">
						</button>
					</div>
				</div>
				<div class="jina-live-results-area" id="jina-live-results-area"></div>
				<video id="jina-capture-preview" class="jina-live-preview" autoplay muted width="33%"/>
			</div>
			`
			let capturePreview = document.getElementById('jina-capture-preview');
			this.captureCanvas = document.getElementById('jina-media-capture-canvas');
			this.captureCanvas.width = 0;
			this.captureCanvas.height = 0;
			this.captureCanvas.style.display = 'none';

			document.getElementById('jina-live-cancel-button').onclick = this.showCaptureScreen;

			document.getElementById('jina-capture-preview').srcObject = this.mediaStream;
			this.searchType = 'live'

			if (this.videoSource === 'screen') {
				this.startLiveSearch(capturePreview.videoWidth, capturePreview.videoHeight)
				document.getElementById('jina-live-toggle-button').onclick = () => this.toggleLiveSearch(capturePreview.videoWidth, capturePreview.videoHeight);
			}
			else {
				this.startLiveSearch();
				document.getElementById('jina-live-toggle-button').onclick = this.toggleLiveSearch;
			}
		}

		this.getUserMediaStream = () => {
			this.clearMedia();

			const constraints = {
				audio: false,

				// audio: {
				// 	deviceId: this.audioSource ? { exact: this.audioSource } : undefined
				// },
				video: {
					deviceId: this.videoSource ? { exact: this.videoSource } : undefined,
					width: this.settings.userMediaWidth,
					height: this.settings.userMediaHeight
				}
			};
			return navigator.mediaDevices.getUserMedia(constraints);
		}

		this.getScreenMediaStream = async () => {
			this.clearMedia();

			let audio = true;
			console.log('audio: ', audio);
			if (navigator.getDisplayMedia) {
				console.log('displayMedia option 1')
				return navigator.getDisplayMedia({ video: true, audio });
			} else if (navigator.mediaDevices.getDisplayMedia) {
				console.log('displayMedia option 2')
				return navigator.mediaDevices.getDisplayMedia({ video: true, audio });
			} else {
				console.log('displayMedia option 3')
				return await navigator.mediaDevices.getUserMedia({ video: { mediaSource: 'screen' }, audio });
			}
		}

		this.updateStreamSource = async (next) => {
			this.clearMedia();
			this.audioSource = this.audioSelect.value;
			this.videoSource = this.videoSelect.value;
			if (next == this.showCaptureScreen)
				return next();

			try {
				if (this.videoSource === 'screen') {
					this.showLoading('Accessing Screen Media');
					this.mediaStream = await this.getScreenMediaStream();
				}
				else {
					this.showLoading('Accessing Device Media');
					this.mediaStream = await this.getUserMediaStream();
				}
			}
			catch (e) {
				return this.showError('Could not access media. Please ensure permission is granted.')
			}
			return next()
		}


		this.clearMedia = () => {
			if (this.liveInterval)
				clearInterval(this.liveInterval);

			if (this.mediaStream) {
				this.mediaStream.getTracks().forEach(track => {
					track.stop();
				});
			}
		}

		this.showReviewMedia = async () => {
			this.clearMedia();
			const { type, src } = this.recordedMedia;
			console.log('recorded media:', this.recordedMedia);
			this.overlay.style.display = 'block';
			this.overlay.style.opacity = '1';
			this.expander.style.height = 'auto';
			this.expander.style.opacity = 1;
			this.expander.innerHTML = `
			<div>
				<button class="jina-media-cancel-button" id="jina-media-cancel-button">
				<img src="assets/x.svg">
				</button>
				${type === 'video' ?
					`<video src="${src}" width="100%" autoplay loop style="display: block;"></video>` :
					`<img src="${src}" width="100%">`
				}
				<div class="jina-media-search-button-container">
				<button class="jina-media-search-button" id="jina-media-search-button">
				search <img src="assets/arrow-right.svg">
				</button
				</div>
			</div>
			`
			document.getElementById('jina-media-search-button').onclick = () => this.search([this.recordedMedia.dataURI]);
			document.getElementById('jina-media-cancel-button').onclick = this.showCaptureScreen;
		}

		this.getMediaDevices = async () => {
			let deviceInfos = await navigator.mediaDevices.enumerateDevices();
			console.log('deviceInfos: ', deviceInfos)
			for (var i = 0; i !== deviceInfos.length; ++i) {
				let deviceInfo = deviceInfos[i];
				let option = document.createElement('option');
				option.value = deviceInfo.deviceId;
				if (deviceInfo.kind === 'audioinput') {
					option.text = deviceInfo.label || 'Microphone ' + (this.audioSelect.length + 1);
					this.audioSelect.appendChild(option);
				} else if (deviceInfo.kind === 'videoinput') {
					option.text = deviceInfo.label || 'Camera ' + (this.videoSelect.length + 1);
					this.videoSelect.appendChild(option);
				}
			}
			let option = document.createElement('option');
			option.value = 'screen';
			option.text = 'Screen Capture';
			this.videoSelect.appendChild(option);
		}

		this.capturePhoto = async (width = this.settings.userMediaWidth, height = this.settings.userMediaHeight) => {
			console.log('captureCanvas2: ', this.captureCanvas);
			this.captureCanvas.width = width;
			this.captureCanvas.height = height;
			this.captureCanvas.style.display = 'block';
			let context = this.captureCanvas.getContext('2d');
			context.drawImage(document.getElementById('jina-capture-preview'), 0, 0, width, height);

			let data = this.captureCanvas.toDataURL('image/jpeg');
			this.captureCanvas.width = 0;
			this.captureCanvas.height = 0;
			this.captureCanvas.style.display = 'none';
			console.log('data:', data);
			this.recordedMedia = {
				src: data,
				dataURI: data,
				type: 'image',
				width,
				height
			}
			if (this.searchType === 'live')
				this.search([data])
			else
				this.showReviewMedia()
		}

		this.startMediaRecord = async (width = this.settings.userMediaWidth, height = this.settings.userMediaHeight) => {
			this.recordedBlobs = [];
			let options = { mimeType: 'video/mp4' };
			if (!MediaRecorder.isTypeSupported(options.mimeType)) {
				console.error(`${options.mimeType} is not supported`);
				options = { mimeType: '' };
			}

			try {
				this.mediaRecorder = new MediaRecorder(this.mediaStream, options);
			} catch (e) {
				console.error('Exception while creating MediaRecorder:', e);
				errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
				return;
			}

			console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);
			//create button UI
			this.mediaRecorder.onstop = (event) => {
				console.log('Recorder stopped: ', event);
				console.log('Recorded Blobs: ', this.recordedBlobs);
				const data = new Blob(this.recordedBlobs, { type: 'video/mp4' });
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					this.recordedMedia = {
						src: window.URL.createObjectURL(data),
						type: 'video',
						dataURI: processed,
						width,
						height
					}
					this.showReviewMedia()
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(data);
			};
			this.mediaRecorder.ondataavailable = (event) => {
				if (event.data && event.data.size > 0) {
					this.recordedBlobs.push(event.data);
				}
			}
			this.mediaRecorder.start();
			// setTimeout(this.stopMediaRecord,1000);

			console.log('MediaRecorder started', this.mediaRecorder);
			document.getElementById('jina-media-controls').innerHTML = `
			<button class="jina-media-button" id="jina-stop-record-button"><img src="assets/square.svg"></button>
			`;
			document.getElementById('jina-stop-record-button').onclick = this.stopMediaRecord;
			document.getElementById('jina-media-live-button').style.display = 'none';
		}

		this.startLiveSearch = async (width = this.settings.userMediaWidth, height = this.settings.userMediaHeight) => {
			this.capturePhoto(width, height)
			this.liveInterval = setInterval(() => this.capturePhoto(width, height), 3000);
		}

		this.toggleLiveSearch = (width, height) => {
			if (this.liveInterval) {
				clearInterval(this.liveInterval)
				document.querySelector('#jina-live-toggle-button img').setAttribute('src','assets/play.svg');
				this.liveInterval = false;
			}
			else {
				document.querySelector('#jina-live-toggle-button img').setAttribute('src','assets/pause.svg');
				if (width && height)
					this.startLiveSearch(width, height);
				else
					this.startLiveSearch();
			}
		}

		this.stopMediaRecord = () => {
			console.log('stopping media recording')
			this.mediaRecorder.stop();
		}

		this.showLoading = (message = "Searching") => {
			this.overlay.style.display = 'block';
			this.overlay.style.opacity = '1';
			this.expander.style.height = 'auto';
			this.expander.style.opacity = 1;
			this.expander.innerHTML = `
			<div class="jina-sea">
				<p class="title">${message}</p>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
				<span class="jina-wave"></span>
			</div>
		`
		}

		this.showError = (message = 'could not reach server') => {
			this.expander.style.height = 'auto';
			this.expander.style.opacity = 1;
			this.expander.innerHTML = `
			<div class="jina-dropdown-message jina-error unselectable">
    		<div class="jina-face jina-roll"><div class="eye"></div><div class="eye right"></div><div class="mouth sad"></div>
        	</div>
   			<div class="jina-shadow jina-move"></div>
				<h4 class="alert">Error!</h4>
				<p>${message}</p>
				<button id="jina-searchbar-error-ok">Ok</button>
			</div>
		`
			this.errorButton = document.getElementById('jina-searchbar-error-ok')
			this.errorButton.onclick = this.clearExpander;
		}

		this.showResults = (index = this.resultsIndex) => {
			//TODO: settings > expander height
			this.resultsIndex = index;
			let resultsHTML = '';
			let toolbar;
			let results = this.results;
			let queries = this.queries;
			let { totalResults, totalTime, onlyImages, queriesContainMedia } = this.resultsMeta;

			if (queries.length > 1 || queriesContainMedia) {
				toolbar = `
				<div class="jina-results-toolbar">
					<div class="jina-results-tabs">`;

				if (queriesContainMedia)
					for (let i = 0; i < queries.length; ++i) {
						toolbar += this.renderPreviewTab(queries[i], i, index === i);
					}
				if (onlyImages)
					toolbar += `
					</div>
					<img class="jina-results-action-button${this.resultsView === 'list' ? ' jina-active' : ''}" src="${_icons.listView}" id="jina-toolbar-button-list" draggable="false">
					<img class="jina-results-action-button${this.resultsView === 'grid' ? ' jina-active' : ''}" src="${_icons.gridView}" id="jina-toolbar-button-grid" draggable="false">`

				toolbar += '</div></div>'
			}

			resultsHTML += `<p class="jina-results-label">${totalResults} results in ${totalTime} seconds</p>`;

			for (let i = 0; i < results[index].length; ++i) {
				let result = results[index][i];
				result.index = i;
				resultsHTML += this.renderResult(result);
			}

			if (this.searchType === 'live') {
				document.getElementById('jina-live-results-area').innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
			}
			else if (this.settings.resultsLocation === 'dropdown') {
				this.overlay.style.display = 'block';
				this.overlay.style.opacity = '1';
				this.expander.style.height = '500px';
				this.expander.style.opacity = 1;
				this.expander.innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
			} else {
				this.resultsArea = document.getElementById(this.settings.resultsAreaId || 'jina-results-area')
				this.resultsArea.innerHTML = `
				${toolbar || ''}
				<div class="jina-expander-results-area">
					${resultsHTML}
				</div>
				`;
				this.clearExpander()
			}

			if (toolbar) {
				for (let i = 0; i < queries.length; ++i) {
					document.getElementById(`jina-results-tab-${i}`).addEventListener('click', () => this.showResults(i));
				}
				if (onlyImages) {
					document.getElementById("jina-toolbar-button-list").addEventListener('click', () => this.setResultsView('list'));
					document.getElementById("jina-toolbar-button-grid").addEventListener('click', () => this.setResultsView('grid'));
				}
			}

			results[index].map((result, idx) => {
				let resultElement = document.getElementById(`jina-result-${idx}`);
				resultElement.addEventListener('click', () => {
					if (result.mimeType.startsWith('text')) {
						this.searchInput.value = result.text;
						this.search()
					} else {
						this.search([result.data], true);
						this.searchIcon.src = result.data;
						this.searchIcon.classList.add('jina-border-right');
					}
				});
			})
		}

		this.renderResult = (result) => {
			if (result.mimeType.startsWith('text')) {
				return `<div class="jina-result jina-text-result" id="jina-result-${result.index}">${result.text}</div>`
			}
			else if (result.mimeType.startsWith('image')) {
				if (this.resultsView === 'grid')
					return `<div class="jina-grid-container"><div class="jina-result" id="jina-result-${result.index}"><img src="${result.data}" class="jina-result-image"/></div></div>`
				else
					return `<div class="jina-result" id="jina-result-${result.index}"><img src="${result.data}" class="jina-result-image"/></div>`
			}
			else if (result.mimeType.startsWith('audio')) {
				return `<div class="jina-result" id="jina-result-${result.index}"><audio src="${result.data}" class="jina-result-audio" controls></audio></div>`
			}
			else if (result.mimeType.startsWith('video')) {
				return `<div class="jina-result" id="jina-result-${result.index}"><video src="${result.data}" class="jina-result-video" controls autoplay muted loop></video></div>`
			}
		}

		this.renderPreviewTab = (query, i, active) => {
			const { uri, mimeType } = query
			return `
			<div class="jina-results-tab${active ? ' jina-active' : ''}" id="jina-results-tab-${i}">
			${
				(mimeType.startsWith('image')) ?
					`<div class="jina-results-tab-img" style="background:url(${uri});background-size: cover;"></div>`
					:
					(mimeType.startsWith('video')) ?
						`<video class="jina-results-tab-video" src="${uri}" autoplay muted loop></video>`
						:
						(mimeType.startsWith('audio')) ?
							`<audio controls class="jina-results-tab-audio" src="${uri}"></audio>`
							: ''
				}
			</div>`
		}

		this.clearExpander = async () => {
			this.clearMedia();
			this.searchIcon.src = this.originalSearchIcon;
			this.searchIcon.classList.remove('jina-border-right');
			this.searchInput.value = '';
			this.overlay.style.display = 'none';
			this.overlay.style.opacity = '0';
			this.dragCounter = 0;
			this.searchInput.classList.remove('jina-highlighted');
			this.expander.style.height = '0px';
			this.expander.style.opacity = 0;
			this.expander.style.transition = '.2s';
			//TODO: settings > animation speed
			await waitFor(.2);
			this.expander.innerHTML = '';
			this.highlighted = false;
		}


		this.settings = {};

		let options = Object.keys(defaultSettings);
		for (let i = 0; i < options.length; ++i) {
			const attr = options[i];
			this.settings[attr] = this.getAttribute(attr) || defaultSettings[attr];
		}

		console.log('searchbar settings:', this.settings)

		this.originalSearchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;
		this.innerHTML = `
		<div class="jina-expander-overlay" id="jina-expander-overlay"></div>
		<div class="jina-searchbar-container jina-theme-${this.settings.theme}">
			<div class="jina-expander" id="jina-search-expander"></div>
			<div id="jina-searchbar-background-container" class="jina-bg-default">
				<div class="jina-search-container">
					<img src="${this.originalSearchIcon}" class="jina-search-icon" id="jina-search-icon" onerror="this.src='${this.originalSearchIcon}'" />
					<input placeholder="type or drop to search" class="jina-search-input jina-contained" id="jina-search-input" autocomplete="off">
				</div>
			</div>
		</div>
		`;

		this.overlay = document.getElementById('jina-expander-overlay');
		this.expander = document.getElementById('jina-search-expander');
		this.searchInput = document.getElementById('jina-search-input');
		this.searchIcon = document.getElementById('jina-search-icon');

		this.dragCounter = 0;

		['drag', 'dragenter', 'dragover', 'dragleave', 'dragexit', 'drop'].forEach(eventName => {
			document.addEventListener(eventName, this.preventDefaults);
		});
		['dragenter'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDrag);
		});
		['dragleave', 'drop', 'dragexit'].forEach(eventName => {
			document.addEventListener(eventName, this.handleDragLeave);
		});

		this.overlay.addEventListener('click', this.clearExpander);
		this.searchInput.addEventListener('drop', this.handleDrop);
		this.expander.addEventListener('drop', this.handleDrop);

		this.searchInput.addEventListener('keydown', this.listenForEnter);
		this.searchIcon.addEventListener('click', this.showInputOptions);

		this.resultsView = localStorage.getItem('jina-expander-results-view') || 'list';

		if (this.settings.typewriterEffect) {
			const placeholders = JSON.parse(this.getAttribute('placeholders'));
			this.typeWriter(placeholders || defaultPlaceholders, 0, 0, this.settings.typewriterDelayCharacter, this.settings.typewriterDelayItem);
		}
	}
}

class Results extends HTMLElement {
	constructor() {
		super();
		this.handleDrag = () => {
			console.log('handle drag enter');
		}
		this.handleDragLeave = () => {
			console.log('handle drag leave');
		}
		this.innerHTML = `
		<div class="jina-results-area" id="jina-results-area"></div>
		`;
		this.dropArea = document.getElementById('jina-search-input');
		this.dropArea.addEventListener('dragenter', this.handleDrag)
		this.dropArea.addEventListener('drop', this.handleDrop);
		this.dropArea.addEventListener('dragleave', this.handleDragLeave);
	}
}

window.customElements.define('jina-floater', Floater);
window.customElements.define('jina-searchbar', SearchBar);
window.customElements.define('jina-results', Results);

window.JinaSettings = {
	timeout: 5000,
	url: false,
	top_k: 16
}

window.JinaBox = {
	init: function (url, settings) {
		window.JinaSettings = {
			...window.JinaSettings,
			...settings,
			url
		}
		console.log('initialized with ', url);
	},
	search: async function (data) {
		return new Promise(function (resolve, reject) {
			const { url, timeout, top_k } = window.JinaSettings;
			if (!url) {
				return reject('Invalid URL');
			}
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => {
				try {
					const data = JSON.parse(xhr.responseText);
					resolve(data);
				}
				catch{
					reject(`request failed at ${url}`);
				}
			}
			xhr.onerror = function (e) {
				console.log('xhr error:', e);
				reject(`request failed at ${url}`);
			}
			xhr.timeout = timeout;
			xhr.ontimeout = () => reject('Search Timeout');
			xhr.send(JSON.stringify({ data, top_k: parseInt(top_k), mode: 'search' }));
		})
	},
	updateSettings: function (settings) {
		window.JinaSettings = {
			...window.JinaSettings,
			...settings
		}
	}
}

function getDataUri(url) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.responseType = "arraybuffer";
		xhr.open("GET", `${url}`);

		xhr.onload = function () {
			var base64, binary, bytes, mediaType;

			bytes = new Uint8Array(xhr.response);
			//NOTE String.fromCharCode.apply(String, ...
			//may cause "Maximum call stack size exceeded"
			binary = [].map.call(bytes, function (byte) {
				return String.fromCharCode(byte);
			}).join('');
			mediaType = xhr.getResponseHeader('content-type');
			base64 = [
				'data:',
				mediaType ? mediaType + ';' : '',
				'base64,',
				btoa(binary)
			].join('');
			resolve(base64);
		};
		xhr.onerror = function (e) {
			console.log('xhr error:', e);
			reject(e);
		}
		xhr.send();
	})
}


function waitFor(seconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), seconds * 1000)
	})
}
