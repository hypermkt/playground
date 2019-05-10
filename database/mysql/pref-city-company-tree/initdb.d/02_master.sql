insert into prefectures (id, title) values (1, '都道府県1');

insert into cities (id, prefecture_id, title) values (1, 1, '市区町村1');
insert into cities (id, prefecture_id, title) values (2, 1, '市区町村2');
insert into cities (id, prefecture_id, title) values (3, 1, '市区町村3');

insert into companies (id, city_id, title) values (1, 1, '会社1');
insert into companies (id, city_id, title) values (2, 1, '会社1');
insert into companies (id, city_id, title) values (3, 1, '会社1');
