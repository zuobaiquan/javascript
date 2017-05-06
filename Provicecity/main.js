var app = angular.module("a", [])
app.controller("b", function($scope) {
    var data = {
        "code": 200,
        "message": "OK",
        "data": {
            "regions": [{
                    "id": 1,
                    "name": "北京",
                    "reg_id": 0,
                    "level": 0,
                    "municipality": 1,
                    "created_at": "2017-04-17T19:46:57.000Z",
                    "updated_at": "2017-04-17T19:46:57.000Z",
                    "deleted_at": null,
                    "regions": [{
                        "id": 2,
                        "name": "北京市",
                        "reg_id": 1,
                        "level": 1,
                        "municipality": 1,
                        "created_at": "2017-04-17T19:48:01.000Z",
                        "updated_at": "2017-04-17T19:48:10.000Z",
                        "deleted_at": null,
                        "regions": [{
                                "id": 3,
                                "name": "东城区",
                                "reg_id": 2,
                                "level": 2,
                                "municipality": 0,
                                "created_at": "2017-04-17T19:48:27.000Z",
                                "updated_at": "2017-04-17T19:48:32.000Z",
                                "deleted_at": null
                            },
                            {
                                "id": 4,
                                "name": "西城区",
                                "reg_id": 2,
                                "level": 2,
                                "municipality": 0,
                                "created_at": "2017-04-17T19:49:05.000Z",
                                "updated_at": "2017-04-17T19:49:05.000Z",
                                "deleted_at": null
                            }
                        ]
                    }]
                },
                {
                    "id": 5,
                    "name": "天津",
                    "reg_id": 0,
                    "level": 0,
                    "municipality": 1,
                    "created_at": "2017-04-17T19:49:23.000Z",
                    "updated_at": "2017-04-17T19:49:23.000Z",
                    "deleted_at": null,
                    "regions": [{
                        "id": 6,
                        "name": "天津市",
                        "reg_id": 5,
                        "level": 1,
                        "municipality": 1,
                        "created_at": "2017-04-17T19:49:44.000Z",
                        "updated_at": "2017-04-17T19:49:44.000Z",
                        "deleted_at": null,
                        "regions": [{
                                "id": 7,
                                "name": "和平区",
                                "reg_id": 6,
                                "level": 2,
                                "municipality": 0,
                                "created_at": "2017-04-17T19:50:00.000Z",
                                "updated_at": "2017-04-17T19:50:00.000Z",
                                "deleted_at": null
                            },
                            {
                                "id": 8,
                                "name": "河东区",
                                "reg_id": 6,
                                "level": 2,
                                "municipality": 0,
                                "created_at": "2017-04-17T19:50:12.000Z",
                                "updated_at": "2017-04-17T19:50:12.000Z",
                                "deleted_at": null
                            },
                            {
                                "id": 9,
                                "name": "河西区",
                                "reg_id": 6,
                                "level": 2,
                                "municipality": 0,
                                "created_at": "2017-04-17T19:50:21.000Z",
                                "updated_at": "2017-04-17T19:50:21.000Z",
                                "deleted_at": null
                            }
                        ]
                    }]
                },
                {
                    "id": 10,
                    "name": "河北",
                    "reg_id": 0,
                    "level": 0,
                    "municipality": 0,
                    "created_at": "2017-04-17T19:52:24.000Z",
                    "updated_at": "2017-04-17T19:52:24.000Z",
                    "deleted_at": null,
                    "regions": [{
                            "id": 11,
                            "name": "石家庄市",
                            "reg_id": 10,
                            "level": 1,
                            "municipality": 0,
                            "created_at": "2017-04-17T19:52:47.000Z",
                            "updated_at": "2017-04-17T19:52:47.000Z",
                            "deleted_at": null,
                            "regions": [{
                                    "id": 12,
                                    "name": "长安区",
                                    "reg_id": 11,
                                    "level": 2,
                                    "municipality": 0,
                                    "created_at": "2017-04-17T19:53:00.000Z",
                                    "updated_at": "2017-04-17T19:53:00.000Z",
                                    "deleted_at": null
                                },
                                {
                                    "id": 13,
                                    "name": "桥东区",
                                    "reg_id": 11,
                                    "level": 2,
                                    "municipality": 0,
                                    "created_at": "2017-04-17T19:53:12.000Z",
                                    "updated_at": "2017-04-17T19:53:12.000Z",
                                    "deleted_at": null
                                }
                            ]
                        },
                        {
                            "id": 14,
                            "name": "唐山市",
                            "reg_id": 10,
                            "level": 1,
                            "municipality": 0,
                            "created_at": "2017-04-17T19:53:25.000Z",
                            "updated_at": "2017-04-17T19:53:25.000Z",
                            "deleted_at": null,
                            "regions": [{
                                    "id": 15,
                                    "name": "路南区",
                                    "reg_id": 14,
                                    "level": 2,
                                    "municipality": 0,
                                    "created_at": "2017-04-17T19:53:49.000Z",
                                    "updated_at": "2017-04-17T19:53:49.000Z",
                                    "deleted_at": null
                                },
                                {
                                    "id": 16,
                                    "name": "路北区",
                                    "reg_id": 14,
                                    "level": 2,
                                    "municipality": 0,
                                    "created_at": "2017-04-17T19:53:58.000Z",
                                    "updated_at": "2017-04-17T19:53:58.000Z",
                                    "deleted_at": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 17,
                    "name": "江苏",
                    "reg_id": 0,
                    "level": 0,
                    "municipality": 0,
                    "created_at": "2017-04-18T02:11:01.000Z",
                    "updated_at": "2017-04-18T02:11:01.000Z",
                    "deleted_at": null,
                    "regions": [{
                        "id": 18,
                        "name": "苏州",
                        "reg_id": 17,
                        "level": 1,
                        "municipality": 0,
                        "created_at": "2017-04-18T02:23:10.000Z",
                        "updated_at": "2017-04-18T10:28:28.000Z",
                        "deleted_at": null,
                        "regions": [{
                            "id": 19,
                            "name": "园区",
                            "reg_id": 18,
                            "level": 3,
                            "municipality": 0,
                            "created_at": "2017-04-18T10:28:46.000Z",
                            "updated_at": "2017-04-18T10:28:46.000Z",
                            "deleted_at": null
                        }]
                    }]
                }
            ]
        }
    };
    $scope.ppid = 5;
    $scope.ccid = 6;
    $scope.aaid = 7;
    window.sc = $scope;

    $scope.provinceArr = []
    $scope.cityArr = []
    $scope.areaArr = []

    //获取到数据后先初始化3个下拉的数据
    data.data.regions.forEach((vp) => {
        $scope.provinceArr.push({
            id: vp.id,
            name: vp.name
        })
        if (vp.id == $scope.ppid) {
            vp.regions.forEach((vc) => {
                $scope.cityArr.push({
                    id: vc.id,
                    name: vc.name
                })
                if (vc.id == $scope.ccid) {
                    vc.regions.forEach((va) => {
                        $scope.areaArr.push({
                            id: va.id,
                            name: va.name
                        })
                    });
                }
            });
        }
    });
})