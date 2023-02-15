--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: mangas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mangas (
    id integer NOT NULL,
    name text NOT NULL,
    image text,
    description text,
    chapters integer,
    score integer
);


ALTER TABLE public.mangas OWNER TO postgres;

--
-- Name: mangas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mangas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mangas_id_seq OWNER TO postgres;

--
-- Name: mangas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mangas_id_seq OWNED BY public.mangas.id;


--
-- Name: mangas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mangas ALTER COLUMN id SET DEFAULT nextval('public.mangas_id_seq'::regclass);


--
-- Data for Name: mangas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mangas (id, name, image, description, chapters, score) FROM stdin;
\.


--
-- Name: mangas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mangas_id_seq', 1, false);


--
-- Name: mangas mangas_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mangas
    ADD CONSTRAINT mangas_name_key UNIQUE (name);


--
-- Name: mangas mangas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mangas
    ADD CONSTRAINT mangas_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

