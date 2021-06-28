CREATE TABLE IF NOT EXISTS public.road_signs
(
    name        character varying(255) COLLATE pg_catalog."default" NOT NULL,
    size        character varying(255) COLLATE pg_catalog."default" NOT NULL,
    update_time timestamp without time zone,
    CONSTRAINT road_signs_pkey PRIMARY KEY (name, size)
)
    TABLESPACE pg_default;

ALTER TABLE public.road_signs
    OWNER to postgres;