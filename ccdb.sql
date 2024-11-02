--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0
-- Dumped by pg_dump version 13.0

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
-- Name: colors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.colors (
    id integer NOT NULL,
    color text NOT NULL,
    palette integer NOT NULL
);


ALTER TABLE public.colors OWNER TO postgres;

--
-- Name: colors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.colors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.colors_id_seq OWNER TO postgres;

--
-- Name: colors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.colors_id_seq OWNED BY public.colors.id;


--
-- Name: savcolors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.savcolors (
    id integer NOT NULL,
    title text NOT NULL,
    color text NOT NULL,
    creator text,
    comment text,
    createdate date NOT NULL,
    imgname text NOT NULL,
    location text
);


ALTER TABLE public.savcolors OWNER TO postgres;

--
-- Name: savcolors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.savcolors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.savcolors_id_seq OWNER TO postgres;

--
-- Name: savcolors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.savcolors_id_seq OWNED BY public.savcolors.id;


--
-- Name: savpalettes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.savpalettes (
    id integer NOT NULL,
    title text NOT NULL,
    creator text,
    comment text,
    createdate date NOT NULL,
    imgname text NOT NULL,
    location text
);


ALTER TABLE public.savpalettes OWNER TO postgres;

--
-- Name: savpalettes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.savpalettes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.savpalettes_id_seq OWNER TO postgres;

--
-- Name: savpalettes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.savpalettes_id_seq OWNED BY public.savpalettes.id;


--
-- Name: colors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colors ALTER COLUMN id SET DEFAULT nextval('public.colors_id_seq'::regclass);


--
-- Name: savcolors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.savcolors ALTER COLUMN id SET DEFAULT nextval('public.savcolors_id_seq'::regclass);


--
-- Name: savpalettes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.savpalettes ALTER COLUMN id SET DEFAULT nextval('public.savpalettes_id_seq'::regclass);


--
-- Data for Name: colors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.colors (id, color, palette) FROM stdin;
\.


--
-- Data for Name: savcolors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.savcolors (id, title, color, creator, comment, createdate, imgname, location) FROM stdin;
\.


--
-- Data for Name: savpalettes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.savpalettes (id, title, creator, comment, createdate, imgname, location) FROM stdin;
\.


--
-- Name: colors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.colors_id_seq', 30, true);


--
-- Name: savcolors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.savcolors_id_seq', 52, true);


--
-- Name: savpalettes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.savpalettes_id_seq', 6, true);


--
-- Name: colors colors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colors
    ADD CONSTRAINT colors_pkey PRIMARY KEY (id);


--
-- Name: savcolors savcolors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.savcolors
    ADD CONSTRAINT savcolors_pkey PRIMARY KEY (id);


--
-- Name: savpalettes savpalettes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.savpalettes
    ADD CONSTRAINT savpalettes_pkey PRIMARY KEY (id);


--
-- Name: colors fk_palette_color; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colors
    ADD CONSTRAINT fk_palette_color FOREIGN KEY (palette) REFERENCES public.savpalettes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

