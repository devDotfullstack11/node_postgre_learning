--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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
-- Name: products; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.products (
    id integer NOT NULL,
    title character varying(255),
    description character varying(255),
    published boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    name character varying(500),
    cin character varying(500)
);


ALTER TABLE public.products OWNER TO me;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO me;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: me
--




--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--




--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

