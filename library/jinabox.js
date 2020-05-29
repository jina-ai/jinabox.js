console.log('loading widget')
let _url;
let _results;

_icons = {
	color: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDEwcHgiIGhlaWdodD0iNDEwcHgiIHZpZXdCb3g9IjAgMCA0MTAgNDEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlByb2R1Y3QgbG9nb19Db3JlX0NvbG9yZnVsPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvZHVjdC1sb2dvX0NvcmVfQ29sb3JmdWwiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNDcuODE2MjczLDE1My4yMTczNjggTDI0OS43MzA4MzIsMTUzLjI0MDUzMSBDMjg4LjIwODk3NCwxNTQuNjgzMDI3IDMwOS44NjQ2OSwxNzAuMzE1MTY2IDMyNy4xMDg5ODUsMTkzLjE1Nzg2MyBDMzE5LjIxNDY0MywyNzIuMzU1NTEyIDI1MC4wNjA3MTEsMzMwLjIwNTg3NSAxNzEuNTI0MjQzLDMyNi45OTY0NTIgQzEzMS41NjU5NzcsMzI0LjU5NjA3NCA5Ni42NjE3MDc5LDMwNi42MjYyNDMgNzEuNzI4NjYwMywyNzkuNTI0OTA0IEMxMTQuMzYxOTczLDIyMC43NDU5NzUgMTgzLjM2OTk5NCwxNTQuNDg2NTY3IDI0NS45MTAyLDE1My4yMzUyOTcgTDI0Ny44MTYyNzMsMTUzLjIxNzM2OCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZDQzY2Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC42MTYzNTQ5LDIyMi4wNjY3MTkgTDM4LjY0NTc3OTQsMjIyLjAyNTkxMSBDNTMuNTM5MzMwNiwyMDAuMDk3NjYyIDc3LjM5NzEwMiwxNzguMzEwNzk4IDEwOS4zNTcxNzUsMTg3LjA3OTMzOSBDMTcwLjEzNDY3OCwyMDQuOTc0MzIxIDIyNy4xODU1MTcsMjQxLjYzMjY1IDI2MS45Njk5NDQsMjQwLjU5NzMzNyBDMjk1LjA3NDUxOSwyMzkuNjEyMDI0IDMwOC40NDI4MzEsMjI5Ljc2ODUyNCAzMjIuOTQ3NzU1LDIxNi4yNjU1MTkgQzMwNS4yNzE4OTgsMjgzLjMyODM3MiAyNDIuMTk2OTA1LDMyOS44ODQ1MTggMTcxLjUyNDI0MywzMjYuOTk2NDUyIEMxMDcuNTE0ODg4LDMyMy4xNTEyNzQgNTYuNDc0NTk3NCwyNzkuMzUzMzE3IDM4LjYxNjM1NDksMjIyLjA2NjcxOSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkY3NjczIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDQuMTIxOTYsMjAwLjcwMDUzMyBMMTQ1LjM5NDI1OCwxOTkuNjI5NTA3IEwxNDguMDE3NTk3LDIwMC42Mjk1MzIgQzE5MC42ODcwNTMsMjE2Ljk5MTg4OSAyMjQuNjI0ODg1LDIzNC42NTgzNDggMjUxLjM5MjkzNywyMzkuMjE4NTM1IEMyODQuODcxNTU1LDI0NC45MjE5MyAzMDYuOTExMzA5LDIyOS4wODI2NDkgMzIzLjA5MDg3NiwyMTUuNzI3ODAyIEMzMDUuNjEwNzkxLDI4My4wNzc4MzUgMjQyLjM4Njc5MywzMjkuODkyMjc4IDE3MS41MjQyNDMsMzI2Ljk5NjQ1MiBDMTMyLjI5MjA2LDMyNC42Mzk2OTEgOTcuOTMxODcwNiwzMDcuMjc0MTYzIDczLjA5NzY4NjMsMjgwLjk5MzE5OCBDOTEuODQzMzY1MSwyNTIuODc3MjA0IDExNi43MjExNDQsMjIzLjkyMTM2OSAxNDQuMTIxOTYsMjAwLjcwMDUzMyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkY5RjczIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzkuODExMzg4LDMwMy41MjA0NjEgTDM5OS42MTMyOTksMzU3LjI2ODUzOCBDNDEyLjAwNDI4NSwzNjguNDA1MjQgNDEzLjAwNzA4OCwzODcuNDM2NCA0MDEuODU0NjU4LDM5OS44MDQ5NjcgQzM5MC44NDA4MDUsNDEyLjAxOTg0NiAzNzIuMDUzODAyLDQxMy4xMzY5MzcgMzU5LjY2NTE1Miw0MDIuNDAxMzA2IEwzNTkuMjQ5MTk3LDQwMi4wMzQyMTcgTDI5Ni4wOTAyNzQsMzQ1LjI2ODM1NSBDMzEyLjY3NTc1MSwzMzMuNjA4MDA1IDMyNy40MjI1NzcsMzE5LjUxOTIxOCAzMzkuODExMzg4LDMwMy41MjA0NjEgWiBNMC41NTAwMzIxOTIsMTY4LjQ4MjU2OCBDNS45MTU2MzY4OCw3MC4wNjA2NjE5IDkxLjc2NTMxMTksLTUuMDk3ODg0NzQgMTkwLjEzNDczMSwwLjI3MDU4Mjg4MSBDMjg4LjUwNDE1LDcuNDI4NTM5ODQgMzY1LjQxMTE1MSw5MS41MzQ1MzI4IDM1OC4yNTcwMTEsMTg5Ljk1NjQzOSBDMzUxLjEwMjg3MiwyODguMzc4MzQ1IDI2Ny4wNDE3MzIsMzYzLjUzNjg5MSAxNjguNjcyMzEzLDM1OC4xNjg0MjQgQzcwLjMwMjg5MzEsMzUyLjc5OTk1NiAtNC44MTU1NzI1LDI2Ni45MDQ0NzUgMC41NTAwMzIxOTIsMTY4LjQ4MjU2OCBaIE0xODcuOTUyMTI3LDMwLjkzOTA5ODEgQzEwNy40NTU0OTcsMjcuNjQ5NTcxNyAzNS4xNzI4MDk1LDkwLjE1MDU2ODUgMzEuODg3MjMyNSwxNzAuNzQzOTU5IEMyOC42MDE2NTU1LDI1MS4zMzczNSA4OS4zODQ4MjUxLDMyMi4wNjIxNjMgMTcxLjUyNDI0MywzMjYuOTk2NDUyIEMyNTIuMDIwODczLDMzMC4yODU5NzggMzIyLjY2MDc3MywyNjkuNDI5NzQ0IDMyNy41ODkxMzgsMTg3LjE5MTU5IEMzMzAuODQxODU5LDEwNy40MDQxMzQgMjcxLjMwMDgwMSwzNy4yODg4NzA1IDE5MC40MDk4NiwzMS4xMDY4MDggTDE4Ny45NTIxMjcsMzAuOTM5MDk4MSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjMDA5OTk5Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	mono: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODJweCIgaGVpZ2h0PSI4MnB4IiB2aWV3Qm94PSIwIDAgODIgODIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+UHJvZHVjdCBsb2dvL0NvcmUvbGlnaHQvUHJvZHVjdCBsb2dvX0NvcmVfbGlnaHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9kdWN0LWxvZ28vQ29yZS9saWdodC9Qcm9kdWN0LWxvZ29fQ29yZV9saWdodCIgZmlsbD0iIzAwOTk5OSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQ5LjcwMjM4OTQsMzAuNTM0Mzc1NyBDMzYuOTc5Mjk1OCwzMC4yNDIwMTQ0IDIyLjc2MjgzNzUsNDMuODQ0MDgyNSAxNC4wODgwMDA5LDU1LjgzMDg5NDIgQzE5LjAwMzc0MTYsNjAuODAxMDM1NiAyNy4yNjU4Mjk3LDY1LjE5OTI3NTEgMzQuNzg0MDIxNCw2NS40OTE2MzY0IEM1MC4zOTg3MjcyLDY2LjM2ODcyMDIgNjMuODcxMjg5MSw1NC4yMTU2Mzc5IDY1LjMxNzA5NTIsMzguNzIwNDkxIEM2MS44NDcxNjA2LDM0LjA0MjcxMDggNTcuNTA5NzQyMywzMC44MjY3MzcgNDkuNzAyMzg5NCwzMC41MzQzNzU3IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC43OTU3ODIzNDMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LjgwOTUyNDgsNDIuNzU3MTY3MiBDNjEuNzMzNjIwMSw0NS42NjYxMDA5IDU5LjE0MTM0MTUsNDcuODI2MjM1MiA1Mi4yMDIxMDQ5LDQ4LjAzMzAxNzUgQzQ1LjI2Mjg2ODIsNDguMjM5Nzk5OSAzMy44ODE2NDY2LDQwLjkxODA1MzEgMjEuNzU2OTgyOSwzNy4zNDM4OTg5IEMxNS4yNTEwNjU4LDM1LjU1NjgyMTggMTAuNDI4MTQ0Niw0MC4xMjQxOTQxIDcuNDcwOTA5NTgsNDQuNTkxODg2OSBDMTEuMDE5NTkxNiw1Ni4yMDc4ODgxIDIxLjM2OTkxNDMsNjQuODQ1NDI3NSAzNC4wODYwMjUsNjUuNDQxMTE5OSBDNDguNTc2NDc2Nyw2Ni42MzI1MDQ3IDYxLjg1MjI4OTcsNTYuNzU1OTM4IDY0LjgwOTUyNDgsNDIuNzU3MTY3MiBaIiBpZD0i6Lev5b6EIiBmaWxsLW9wYWNpdHk9IjAuNzk1NzgyMzQzIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ny43MzQ3ODc3LDYwLjMwNjg1NTUgTDc5LjY1NDg3MDMsNzAuOTk3MDA0NiBDODIuMTI0NjcyOCw3My4yMTIwODA5IDgyLjMyNDU1NDEsNzYuOTk3MzU1IDgwLjEwMTYyMzcsNzkuNDU3NDQ3NiBDNzcuOTA2MzE0Nyw4MS44ODY5NzE4IDc0LjE2MTY0MTksODIuMTA5MTU5OSA3MS42OTIzMDQ4LDc5Ljk3Mzg1NjEgTDcxLjYwOTM5NTYsNzkuOTAwODQyNiBMNTkuMDIwODA0LDY4LjYwOTg5OTUgQzYyLjMyNjQwMjcsNjYuMjkwNzkyOCA2NS4yNjU1NjM2LDYzLjQ4ODc0NDUgNjcuNzM0Nzg3Nyw2MC4zMDY4NTU1IFoiIGlkPSLlvaLnirbnu5PlkIgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM3LjQzOTk4NzQsNi4xNzc5NzkxNCBDNTMuODI2NTAyNCw3LjE2MjM1MTg5IDY1Ljk1MjUyMzUsMjEuMjcxNjk0NiA2NS4yOTcwNjMsMzcuMzQ5NzgyNyBDNjQuMzEzODcyMSw1My43NTU5OTUxIDUwLjIyMTQ2OTEsNjUuODk2NTkyMyAzNC4xNjI2ODQ0LDY1LjI0MDM0MzkgQzE3Ljc3NjE2OTQsNjQuMjU1OTcxMSA1LjY1MDE0ODI5LDUwLjE0NjYyODQgNi4zMDU2MDg5NCwzNC4wNjg1NDAyIEM2Ljk2MTA2OTU5LDE3Ljk5MDQ1MiAyMS4zODEyMDI4LDUuNTIxNzMwNiAzNy40Mzk5ODc0LDYuMTc3OTc5MTQgTTM3Ljg3NTQwOTEsMC4wNTk3MjE5NTc1IEMxOC4yNTEwNjc5LC0xLjAxMTI2NzggMS4xMjQzNzAxMiwxMy45ODI1ODg3IDAuMDUzOTUxNTEzMSwzMy42MTc0MDA5IEMtMS4wMTY0NjcxLDUzLjI1MjIxMzEgMTMuOTY5MzkzNCw3MC4zODgwNDkgMzMuNTkzNzM0Niw3MS40NTkwMzg4IEM1My4yMTgwNzU4LDcyLjUzMDAyODUgNjkuOTg3OTY3Myw1Ny41MzYxNzIgNzEuNDE1MTkyMSwzNy45MDEzNTk5IEM3Mi44NDI0MTY5LDE4LjI2NjU0NzggNTcuNDk5NzUwMiwxLjQ4NzcwODMyIDM3Ljg3NTQwOTEsMC4wNTk3MjE5NTc1IFoiIGlkPSLlvaLnirYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
	inverse: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDIwcHgiIGhlaWdodD0iNDIwcHgiIHZpZXdCb3g9IjAgMCA0MjAgNDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2NCAoOTM1MzcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlByb2R1Y3QgbG9nb19Db3JlX0Rhcms8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9kdWN0LWxvZ29fQ29yZV9EYXJrIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMjUzLjg2MDU3MywxNTYuOTU0Mzc3IEwyNTUuODIxODI4LDE1Ni45NzgxMDUgQzI5NS4yMzg0NjEsMTU4LjQ1NTc4MyAzMTcuNDIyMzY1LDE3NC40NjkxOTQgMzM1LjA4NzI1MywxOTcuODY5MDMxIEMzMjcuMDAwMzY2LDI3OC45OTgzMjkgMjU2LjE1OTc1MiwzMzguMjU5Njc3IDE3NS43MDc3NjEsMzM0Ljk3MTk3NSBDMTM0Ljc3NDkwMywzMzIuNTEzMDUyIDk5LjAxOTMxMDYsMzE0LjEwNDkzMiA3My40NzgxMzk4LDI4Ni4zNDI1ODQgQzExNy4xNTEyOSwyMjYuMTMwMDIzIDE4Ny44NDI0MzMsMTU4LjI1NDUzMiAyNTEuOTA4MDEsMTU2Ljk3Mjc0MyBMMjUzLjg2MDU3MywxNTYuOTU0Mzc3IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC44MDI5MzkyNDgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM5LjU1ODIxNzIsMjI3LjQ4Mjk4IEwzOS41ODgzNTkzLDIyNy40NDExNzcgQzU0Ljg0NTE2OCwyMDQuOTc4MDkzIDc5LjI4NDgzNjEsMTgyLjY1OTg0MiAxMTIuMDI0NDIzLDE5MS42NDIyNSBDMTc0LjI4NDMwNCwyMDkuOTczNjk0IDIzMi43MjY2MjcsMjQ3LjUyNjEyOSAyNjguMzU5NDU0LDI0Ni40NjU1NjUgQzMwMi4yNzE0NTgsMjQ1LjQ1NjIxOSAzMTUuOTY1ODI2LDIzNS4zNzI2MzQgMzMwLjgyNDUyOSwyMjEuNTQwMjg4IEMzMTIuNzE3NTU0LDI5MC4yMzg4MiAyNDguMTA0MTQ3LDMzNy45MzA0ODIgMTc1LjcwNzc2MSwzMzQuOTcxOTc1IEMxMTAuMTM3MjAzLDMzMS4wMzMwMTMgNTcuODUyMDI2NiwyODYuMTY2ODEzIDM5LjU1ODIxNzIsMjI3LjQ4Mjk4IFoiIGlkPSLot6/lvoQiIGZpbGwtb3BhY2l0eT0iMC44MDI5MzkyNDgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM0OC4wOTk0NzEsMzEwLjkyMzM5OSBMNDA5LjM1OTk2NSwzNjUuOTgyNDA1IEM0MjIuMDUzMTcsMzc3LjM5MDczNCA0MjMuMDgwNDMyLDM5Ni44ODYwNjkgNDExLjY1NTk5MSw0MDkuNTU2MzA4IEM0MDAuMzczNTA4LDQyMi4wNjkxMSAzODEuMTI4Mjg1LDQyMy4yMTM0NDggMzY4LjQzNzQ3Myw0MTIuMjE1OTcyIEwzNjguMDExMzcyLDQxMS44Mzk5MjkgTDMwMy4zMTE5ODgsMzUzLjY4OTUzNSBDMzIwLjMwMTk4OSwzNDEuNzQ0Nzg2IDMzNS40MDg0OTMsMzI3LjMxMjM3IDM0OC4wOTk0NzEsMzEwLjkyMzM5OSBaIE0wLjU2MzQ0NzYxMSwxNzIuNTkxODk5IEM2LjA1OTkyMDcxLDcxLjc2OTQ1ODUgOTQuMDAzNDkwMiwtNS4yMjIyMjMzOSAxOTQuNzcyMTY0LDAuMjc3MTgyNDYzIEMyOTUuNTQwODM3LDcuNjA5NzIzNzQgMzc0LjMyMzYxOCw5My43NjcwODI0IDM2Ni45OTQ5ODcsMTk0LjU4OTUyMyBDMzU5LjY2NjM1NywyOTUuNDExOTYzIDI3My41NTQ5NDUsMzcyLjQwMzY0NSAxNzIuNzg2MjcxLDM2Ni45MDQyMzkgQzcyLjAxNzU5NzgsMzYxLjQwNDgzMyAtNC45MzMwMjU0OCwyNzMuNDE0MzQgMC41NjM0NDc2MTEsMTcyLjU5MTg5OSBaIE0xOTIuNTM2MzI1LDMxLjY5MzcxMDMgQzExMC4wNzYzNjMsMjguMzIzOTUxNSAzNi4wMzA2ODI5LDkyLjM0OTM2MjkgMzIuNjY0OTY5OSwxNzQuOTA4NDQ2IEMyOS4yOTkyNTY5LDI1Ny40Njc1MyA5MS41NjQ5NDI4LDMyOS45MTczMzcgMTc1LjcwNzc2MSwzMzQuOTcxOTc1IEMyNTguMTY3NzI0LDMzOC4zNDE3MzQgMzMwLjUzMDU0OCwyNzYuMDAxMjAxIDMzNS41NzkxMTcsMTkxLjc1NzIzOSBDMzM4LjkxMTE3MiwxMTAuMDIzNzQ3IDI3Ny45MTc4OTQsMzguMTk4MzU1MSAxOTUuMDU0MDAzLDMxLjg2NTUxMDcgTDE5Mi41MzYzMjUsMzEuNjkzNzEwMyBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
	target: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBR0DMy4BaSWgAAAEKUlEQVRYw72YQWwbRRSG/02s2rFSSA5RKlUyOK1DHYfcGrhwiRIaoUg5Aj3kwiVCVRS1VW8IIdp7KwTKhRMEOPTQVFwcGV+aSyltpERGVKKmASHvNlIciQh5m9KPw26c9dpre0PN29PO/PP+mTfz3rw3UghBDLLOOoOEGaZIKLTUr5OS+mV1gISAFuPFkPjUH5MhdCwcVZN+j/q4hjSmjF7VKxqX9KO29FgFbaiov9tQFUzhfkMssMo2jWSbVRYYOsCGWkkVntQHel9Dkiz9rIIeKqqPJH0qW8Ma1YgGJRX1rb7Ub6HW484ryhwFoEKOedLEEeI0FhanESJOmnlyVIACc0Sbr6ee4gRL2ECeWXo5NN4ZnvCEM56WXmbJAzZLnGiLxh04TBawuEK/196IJFtskcSLFv1cxgKyDLekcYekWAM2mfBvKCLCDDNE8I8RE2wCa6Ra0LiGygJ3GasHe4zUqH2Mu0DWMVoziihLwEYjijZsMMYGsOQcgWDYHDbWgaHCSNVoJjZzAeNxtrUAXAlP4aG5BBRIBpNcBfLOiTqKuCctD1xtoMMNII+oMHtUiqqeWSo8coJNfecCkHNcL9AYgSfMg+olBywcIrqq/XHNSLqpvUbxx4XHNKJJTWpEMU+rRwxJ2tNNSTOK1/OPso1JutEMEcLgHCtY7LOPxQpvYwRi05hsM1rTjxDngTzxQIoPKQM73Oc+O8AO84E0PfwAnK8nuQZ8Fji3aco852vO0kcfZ1kGdpgKxF8HrlV7q9u4DFxotKmIHr4HvvLE4+MsA7eI4lfvfBeA5YO/iAbUJxRVQlJESUVk60/9UzO5IY1rR9e1V235Szf0jt5UUr/UILt1UlE9U0RSQhnZMrQr7mFSwsQGypQwKTLtm98U+/zEy56QL/pZx2bCh5ymiEmJMmBjUqLEvS61I8+FulSPNdq4bQ1JDJAiRYY7wCJJUiTo9s0vjUWZ8RpXfIOyc+RrkN0kSJFkEbhDhhQpBtrb+Bi3gW84Xu1/ie+AFWJtbbwh13MfSxo+WJ9PKvpCb+k9STf0UIZe06LeVVmfq+K3jKvtlKvxUFsIZyzzgAeuWzZzxlxjZ2wVVro4x20s9nmKxS2mQoYVOVnUKjDfNAbHGGGSSdLEmsbheWC1ziqdDfXezk5fWv/L9VuTSFz+T4nExVaJRKdToprkbvPIyd1m0+SuCu1smurJ6deAjYYJdzfTTHsDqCfh3gDWwuT1WcDkUl3pkKBIkURd6XARE8i2zOlraIKKoBQm5oEq1/XCFkEeGn851+Me8hIl54DS0245135hWtCmflVEH0v6RM90Sq9r9MiFqW9DO1Vi+9bjfSxIuI8Fv7+Qx4K6FTlfBhOTTKtoXCst31Y8V6okPRWS7HCzb/OVyENlCBnhjBP2vWtXf0jaDTfoXxBSJgmkpHUYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTI5VDAzOjUxOjM0KzAwOjAwYs79EwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNS0yOVQwMzo1MTozNCswMDowMBOTRa8AAAAASUVORK5CYII='
}

let baseStyles = `
@keyframes jina-bg-rotate {
	100% {
		transform: rotate(1turn);
	}
}

.jina-bg-default{
	background: #009999;
	border-radius: 50px;
	padding: 1px;
	overflow: hidden;
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

.jina-search-input::placeholder{
	opacity: .5;
	font-weight: 700;
	font-size: .75em;
}

.jina-sea {
	width: 300px;
	height: 300px;
	background-color: whitesmoke;
	background-image: linear-gradient(
		#009999,
		rgba(255, 255, 255, 0) 80%,
		rgba(255, 255, 255, 0.5));
	position: relative;
	overflow: hidden;
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
	background: #009999;
	border-radius: 43%;
	filter: opacity(0.4);
	animation: drift linear infinite;
	transform-origin: 50% 48%;
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

@keyframes drift {
	from {
		transform: rotate(360deg);
	}
}
`

let defaultStyles = {
	jinaFloaterContainer: `
	position: fixed;
  bottom: 2em;
  right: 2em;
	`,
	jinaFloater: `
	background: white;
  border: 1px solid #cfd8dc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 3em;
  width: 3em;
  border-radius: 50%;
  position: relative;
	cursor: pointer;`,
	jinaFloaterIcon: `
	width: 1.25em; 
  height: 1.25em;
	position: absolute;
  top: .85rem;
	left: .85rem;
	`,
	jinaFloaterBox: `
	position: fixed;
  background: white;
  border: 1px solid #cfd8dc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  bottom: 6em;
  right: 2em;
  height: 500px;
  max-height: 65vh;
  width: 300px;
	border-radius: 1em;
	display: none;
	flex-direction: column;
	align-items: stretch;
	font-family: Comfortaa;
	`,
	jinaSearchInput: `
	font-family: Comfortaa;
	font-size:1em;
	border-radius: 2em;
	border: none;
	outline: none;
	padding: .5em;
	// border: 1px solid #cfd8dc;
	padding-left: 2.25rem;
	`,
	jinaFloaterSearchContainer: `
	padding: .5em;
	border-radius: .5em .5em 0em 0em;
	position: relative;
	`,
	jinaFloaterResultsContainer: `
	align-content: flex-end;
	border: 1px solid white;
	border-radius: .5em;
	margin: .5em;
	height: 100%;
	overflow-y: auto;
	transition: .2s;
	`,
	jinaFloaterFileInput: `
	display: none;
	`,
	jinaResult: `
	background: white;
	padding: .5em;
	margin: .5em;
  border-radius: .25em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	`,
	jinaResultsArea: `
	font-family: Comfortaa;
	padding: .5em;
	height: 100%;
	overflow-y: auto;
	`,
	jinaHighlighted: `
	border-color: #009999
	`,
	jinaSearchIcon: `
	width: 1.25em; 
  height: 1.25em;
	position: absolute;
  top: .5rem;
	left: .55rem;
	`,
	jinaFloaterInstructions: `
	text-align: center;
	opacity: .5;
	`,
	jinaResultsLabel: `
	margin-top: 0px;
	margin-left: .5em;
	opacity: .5;
	`,
	jinaSearchContainer: `
	position: relative;
	`,
	jinaPersian: `
	border-color: #009999;
	`
}

let defaultPlaceholders = ['type or drag anything to search', 'powered by Jina', 'unleash your curiosity and happy searching'];

let defaultSettings = {
	typewriterDelayCharacter: 50,
	typewriterDelayItem: 1000,
	styleTheme: 'persian',
	searchIcon: 'color',
	floaterIcon: 'color',
	globalDrag: true,
}

class Floater extends HTMLElement {
	constructor() {
		super();

		const customSettings = JSON.parse(this.getAttribute('settings'));
		this.settings = {
			...defaultSettings,
			...customSettings,
		}

		const floaterIcon = _icons[this.settings.floaterIcon] || this.settings.floaterIcon;
		const searchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;

		this.innerHTML = `
		<head>
			<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap" rel="stylesheet">
		</head>

		<style>
		${baseStyles}
		.jina-floater-container{${defaultStyles.jinaFloaterContainer}}
		.jina-floater{${defaultStyles.jinaFloater}}
		.jina-floater-icon{${defaultStyles.jinaFloaterIcon}}
		.jina-floater-box{${defaultStyles.jinaFloaterBox}}
		.jina-floater-search-container{${defaultStyles.jinaFloaterSearchContainer}}
		.jina-search-container{${defaultStyles.jinaSearchContainer}}
		.jina-search-icon{${defaultStyles.jinaSearchIcon}}
		.jina-search-input{${defaultStyles.jinaSearchInput}}
		.jina-floater-results-container{${defaultStyles.jinaFloaterResultsContainer}}
		.jina-floater-result{${defaultStyles.jinaResult}}
		.jina-highlighted{${defaultStyles.jinaHighlighted}}
		.jina-contained{width:100%;box-sizing: border-box;}
		.jina-floater-instructions{${defaultStyles.jinaFloaterInstructions}}
		.jina-floater-results-label{${defaultStyles.jinaResultsLabel}}
		.jina-persian-theme{${defaultStyles.jinaPersian}}
		#jina-floater-file-input{${defaultStyles.jinaFloaterFileInput}}
		</style>

		<div class="jina-floater-container">
			<div class="jina-floater" id="jina-floater-icon">
				<img src="${floaterIcon}" class="jina-floater-icon" />
			</div>
		</div>
		<div class="jina-floater-box" ondrag={function(){alert('drag')}} id="jina-floater-box">
			<div class="jina-floater-search-container">
				<div id="jina-floater-background-search-container" class="jina-bg-default">
					<div class="jina-search-container">
						<img src="${searchIcon}" class="jina-search-icon" />
						<input placeholder="search" class="jina-search-input jina-contained" id="jina-floater-search-box" autocomplete="off">
					</div>
				</div>
			</div>
			<div class="jina-floater-results-container" id="jina-floater-drop-area">
				<input type="file" id="jina-floater-file-input" multiple>
				<h2 class="jina-floater-instructions">Search or Drop Files</h2>
			</div>
		</div>
		`;

		this.showBox = false;

		this.jinaButton = document.getElementById('jina-floater-icon');
		this.dropArea = document.getElementById('jina-floater-drop-area');
		this.searchInput = document.getElementById('jina-floater-search-box');

		this.jinaButton.addEventListener('click', this.toggleShow);

		['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.preventDefaults, false)
			this.searchInput.addEventListener(eventName, this.preventDefaults, false)
		});
		['dragenter', 'dragover'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.highlightArea, false)
			this.searchInput.addEventListener(eventName, this.highlightSearch, false)
		});
		['dragleave', 'drop'].forEach(eventName => {
			this.dropArea.addEventListener(eventName, this.unhighlightArea, false)
			this.searchInput.addEventListener(eventName, this.unhighlightSearch, false)
		});
		this.dropArea.addEventListener('drop', this.handleDrop, false);
		this.searchInput.addEventListener('drop', this.handleDrop, false);

		this.searchInput = document.getElementById('jina-floater-search-box');
		this.searchInput.addEventListener('keydown', this.listenForEnter);
		this.searchInput.addEventListener('focus', this.highlightSearch);
		this.searchInput.addEventListener('blur', this.unhighlightSearch);

		this.searchBackground = document.getElementById('jina-floater-background-search-container');

		const placeholders = JSON.parse(this.getAttribute('placeholders'));
		console.log('settings: ', this.settings)
		typeWriter('#jina-floater-search-box', placeholders || defaultPlaceholders, 0, 0, this.settings.typewriterDelayCharacter, this.settings.typewriterDelayItem);
	}

	toggleShow() {
		console.log('toggle show');
		this.showBox = !this.showBox;
		this.floaterBox = document.getElementById('jina-floater-box');
		if (this.showBox) {
			this.floaterBox.style.display = 'flex';
		}
		else {
			this.floaterBox.style.display = 'none';
		}
	}

	listenForEnter = (key) => {
		if (key.keyCode == 13) {
			this.search()
		}
	}

	async search(query = [this.searchInput.value], inBytes = false) {
		console.log('query: ', query);
		console.log('searching...');
		let response = await window.JinaBox.search(query, 10, inBytes);
		console.log('response:', response);
		let results = [];
		let { docs } = response.search;
		for (let i = 0; i < docs.length; ++i) {
			let docResults = docs[i];
			let { topkResults } = docResults;
			for (let j = 0; j < topkResults.length; ++j) {
				const res = topkResults[j];
				results.push({ data: res.matchDoc.dataUri, score: res.score.value, contentType: res.matchDoc.dataUri.startsWith('data:image/') ? 'image' : 'text' });
			}
		}
		this.results = results;
		let html = '';
		console.log('results before:', this.results);
		this.results = this.results.sort((a, b) => { return b.score - a.score });
		console.log('results after:', this.results);
		html += `<p class="jina-floater-results-label">results for ${inBytes ? `${query.length} image input${query.length > 1 ? 's' : ''}` : `"${query}"`}</p>`;
		this.results.map((result, idx) => {
			html += `<div class="jina-floater-result" id="jina-floater-result-${idx}">${result.contentType === 'text' ? result.data : `<img src="${result.data}" class="jina-result-image"/>`}</div>`;
		});
		this.dropArea.innerHTML = html;
		this.results.map((result, idx) => {
			let resultElement = document.getElementById(`jina-floater-result-${idx}`);
			resultElement.addEventListener('click', () => { this.search([result.data], result.data.startsWith('data:image/')) });
		})
	}

	preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	}
	handleDrag = function () {
		console.log('handle drag enter');
	}
	handleDragLeave = function () {
		console.log('handle drag leave');
	}
	handleDrop = async (e) => {
		console.log('handle drop files');
		let dt = e.dataTransfer;
		let imgsrc = dt.getData('URL')
		if (imgsrc) {
			if (imgsrc.startsWith('data:')) {
				this.search([imgsrc], true);
			}
			else {
				let dataURI;
				try{
					dataURI = await getDataUri(imgsrc);
				}
				catch(e){
					dataURI = imgsrc;
				}
				console.log('dataUri:', dataURI)
				this.search([imgsrc], true);
			}
		}
		else {
			let acceptedFiles = dt.files;
			let processedFiles = [];
			console.log('files: ', acceptedFiles)
			for (let i = 0; i < acceptedFiles.length; ++i) {
				const file = acceptedFiles[i];
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					processedFiles.push(processed);
					if (processedFiles.length === acceptedFiles.length)
						this.search(processedFiles, true)
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(file);
			}
		}
	}

	highlightArea = () => {
		this.dropArea.classList.add('jina-highlighted')
	}
	unhighlightArea = () => {
		this.dropArea.classList.remove('jina-highlighted')
	}

	highlightSearch = () => {
		this.searchBackground.classList.add('jina-bg-rainbow');
		this.searchInput.classList.add('jina-highlighted')
	}
	unhighlightSearch = () => {
		this.searchBackground.classList.remove('jina-bg-rainbow');
		this.searchInput.classList.remove('jina-highlighted')
	}
}

class SearchBar extends HTMLElement {
	constructor() {
		super();
		const customSettings = JSON.parse(this.getAttribute('settings'));
		this.settings = {
			...defaultSettings,
			...customSettings,
		}

		const searchIcon = _icons[this.settings.searchIcon] || this.settings.searchIcon;

		this.innerHTML = `
		<style>
		.jina-search-container{${defaultStyles.jinaSearchContainer}}
		.jina-search-icon{${defaultStyles.jinaSearchIcon}}
		.jina-search-input{${defaultStyles.jinaSearchInput}}
		.jina-searchbar-container{
			max-width: 300px;
			position: relative;
		}
		.jina-expander{
			position: absolute;
			top: 0;
			width: 100%;
			background: #009999;
			border-radius: 1.25em;
			padding-top: 0em;
			padding-bottom: 0em;
			text-align: center;
			opacity: 0;
			height: 0px;
			transition: .2s;
			overflow: hidden;
		}

		</style>
		<div class="jina-searchbar-container">
			<div class="jina-expander" id="jina-search-expander">
				<h3>Drop here to search</h3>
				<img src="${_icons.target}" class="jina-target-drop-icon">
			</div>
			<div id="jina-searchbar-background-container" class="jina-bg-default">
				<div class="jina-search-container">
					<img src="${searchIcon}" class="jina-search-icon" />
					<input placeholder="search" class="jina-search-input jina-contained" id="jina-search-box" autocomplete="off">
				</div>
			</div>
			
		</div>
		`;

		this.dropArea = document.getElementById('jina-search-box');
		this.expander = document.getElementById('jina-search-expander');

		this.dragCounter = 0;

		['drag', 'dragenter', 'dragover', 'dragleave', 'dragexit', 'drop'].forEach(eventName => {
			document.addEventListener(eventName, this.preventDefaults, false);
		});
		['dragenter'].forEach(eventName => {
			document.addEventListener(eventName, this.highlight, false);
		});
		['dragleave', 'drop', 'dragexit'].forEach(eventName => {
			document.addEventListener(eventName, this.unhighlight, false);
		});

		this.dropArea.addEventListener('drop', this.handleDrop, false);
		this.expander.addEventListener('drop', this.handleDrop, false);

		this.searchInput = document.getElementById('jina-search-box');
		this.searchInput.addEventListener('keydown', this.listenForEnter);

		const placeholders = JSON.parse(this.getAttribute('placeholders'));

		typeWriter('#jina-search-box', placeholders || defaultPlaceholders);
	}

	async search(query = [this.searchInput.value], inBytes = false) {
		this.showLoading();
		console.log('searching...');
		let response = await window.JinaBox.search(query, 10, inBytes);
		console.log('response:', response);
		let results = [];
		let { docs } = response.search;
		for (let i = 0; i < docs.length; ++i) {
			let docResults = docs[i];
			let { topkResults } = docResults;
			for (let j = 0; j < topkResults.length; ++j) {
				const res = topkResults[j];
				results.push({ data: res.matchDoc.dataUri, score: res.score.value, contentType: res.matchDoc.dataUri.startsWith('data:image/') ? 'image' : 'text' });
			}
		}
		this.results = results;
		this.results = this.results.sort((a, b) => { return b.score - a.score });
		let html = '';
		console.log('this.results:', this.results);
		html += `<p class="jina-results-label">results for ${inBytes ? `${query.length} image input${query.length > 1 ? 's' : ''}` : `"${query}"`}</p>`;
		this.results.map((result, idx) => {
			html += `<div class="jina-result" id="jina-result-${idx}">${result.contentType === 'text' ? result.data : `<img src="${result.data}" class="jina-result-image"/>`}</div>`;
		});
		this.resultsArea = document.getElementById('jina-results-area');
		this.resultsArea.innerHTML = html;
		this.results.map((result, idx) => {
			let resultElement = document.getElementById(`jina-result-${idx}`);
			resultElement.addEventListener('click', () => { this.search([result.data], result.data.startsWith('data:image/')) });
		})
		this.clearExpander()
	}

	listenForEnter = (key) => {
		if (key.keyCode == 13) {
			this.search()
		}
	}

	preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	}

	handleDrop = async (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log('handle drop files');
		console.log('drop event:', e);
		let dt = e.dataTransfer;
		let imgsrc = dt.getData('URL')
		console.log('imgsrc: ', imgsrc)
		if (imgsrc) {
			if (imgsrc.startsWith('data:')) {
				this.search([imgsrc], true);
			}
			else {
				let dataURI;
				try{
					dataURI = await getDataUri(imgsrc);
				}
				catch(e){
					dataURI = imgsrc;
				}
				console.log('dataUri:', dataURI)
				this.search([imgsrc], true);
			}
		}
		else {
			let acceptedFiles = dt.files;
			let processedFiles = [];
			console.log('files: ', acceptedFiles)
			for (let i = 0; i < acceptedFiles.length; ++i) {
				const file = acceptedFiles[i];
				let reader = new FileReader();
				reader.addEventListener("load", () => {
					const processed = reader.result;
					processedFiles.push(processed);
					if (processedFiles.length === acceptedFiles.length)
						this.search(processedFiles, true)
					console.log('processed: ', processed);
				}, false);
				reader.readAsDataURL(file);
			}
		}
	}

	highlight = () => {
		this.dragCounter++;
		console.log('highlighting')
		this.dropArea.classList.add('jina-highlighted');
		this.expander.style.paddingTop = '5em';
		this.expander.style.paddingBottom = '5em';
		this.expander.style.height = 'auto';
		this.expander.style.opacity = 1;
	}
	unhighlight = () => {
		console.log('dragexit')
		this.dragCounter--;
		if (this.dragCounter < 1) {
			console.log('unhighlighting')
			this.dropArea.classList.remove('jina-highlighted');
			this.expander.style.paddingTop = '0em';
			this.expander.style.paddingBottom = '0em';
			this.expander.style.height = '0px';
			this.expander.style.opacity = 0;
		}
	}

	showLoading = () => {
		this.expander.style.paddingTop = '0em';
		this.expander.style.paddingBottom = '0em';
		this.expander.style.transition = '0s';
		this.expander.innerHTML = `
		<div class="jina-sea">
					<p class="title">Searching</p>
			 		<span class="jina-wave"></span>
			 		<span class="jina-wave"></span>
			 		<span class="jina-wave"></span>
				 </div>
				 `
	}

	clearExpander = () => {
		this.dragCounter = 0;
		this.dropArea.classList.remove('jina-highlighted');
		this.expander.style.paddingTop = '0em';
		this.expander.style.paddingBottom = '0em';
		this.expander.style.height = '0px';
		this.expander.style.opacity = 0;
		this.expander.style.transition = '.2s';
		this.expander.innerHTML = `
		<h3>Drop here to search</h3>
		<img src="${_icons.target}" class="jina-target-drop-icon">
		`
	}
}

class Results extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
		.jina-results-area{${defaultStyles.jinaResultsArea}}
		.jina-results-label{${defaultStyles.jinaResultsLabel}}
		.jina-result{${defaultStyles.jinaResult}}
		</style>
		<div class="jina-results-area" id="jina-results-area"></div>
		`;
		this.dropArea = document.getElementById('jina-search-box');
		this.dropArea.addEventListener('dragenter', this.handleDrag)
		this.dropArea.addEventListener('drop', this.handleDrop);
		this.dropArea.addEventListener('dragleave', this.handleDragLeave);
	}
	handleDrag = function () {
		console.log('handle drag enter');
	}
	handleDragLeave = function () {
		console.log('handle drag leave');
	}
}

window.customElements.define('jina-floater', Floater);
window.customElements.define('jina-searchbar', SearchBar);
window.customElements.define('jina-results', Results);

window.JinaBox = {
	init: function (url) {
		_url = url;
		console.log('initialized with ', url);
	},
	search: async function (data, top_k = 10, inBytes = false) {
		const results = await fetch(_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data, top_k, mode: 'search' })
		})
		return results.json();
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

function typeWriter(selector_target, text_list, i = 0, text_list_i = 0, delay_next_char = 100, delay_next_item = 1000, ) {
	if (!i) {
		document.querySelector(selector_target).placeholder = "";
	}
	txt = text_list[text_list_i];
	if (i < txt.length) {
		document.querySelector(selector_target).placeholder += txt.charAt(i);
		i++;
		setTimeout(typeWriter, delay_next_char, selector_target, text_list, i, text_list_i, delay_next_char, delay_next_item);
	}
	else {
		text_list_i++;
		if (typeof text_list[text_list_i] === "undefined") {
			setTimeout(typeWriter, delay_next_item, selector_target, text_list, 0, 0, delay_next_char, delay_next_item);
		}
		else {
			i = 0;
			setTimeout(typeWriter, delay_next_item, selector_target, text_list, i, text_list_i, delay_next_char, delay_next_item);
		}
	}
}