CREATE TABLE IF NOT EXISTS postgres.road_signs
(
    name        character varying(255) COLLATE pg_catalog."default" NOT NULL,
    size        character varying(255) COLLATE pg_catalog."default" NOT NULL,
    update_time timestamp with time zone                            NOT NULL DEFAULT timezone('UTC'::text, CURRENT_TIMESTAMP),
    CONSTRAINT road_signs_pkey PRIMARY KEY (name, size)
)
    TABLESPACE pg_default;

ALTER TABLE postgres.road_signs
    OWNER to postgres;