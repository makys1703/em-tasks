--
-- PostgreSQL database dump
--

-- Dumped from database version 16.5 (Ubuntu 16.5-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.0

-- Started on 2024-12-07 02:31:56

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
-- TOC entry 217 (class 1259 OID 98657)
-- Name: Action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Action" (
    id integer NOT NULL,
    "shopId" integer,
    plu integer NOT NULL,
    date timestamp(3) without time zone NOT NULL,
    action character varying(64) NOT NULL
);


ALTER TABLE public."Action" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 98656)
-- Name: Action_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Action_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Action_id_seq" OWNER TO postgres;

--
-- TOC entry 3335 (class 0 OID 0)
-- Dependencies: 216
-- Name: Action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Action_id_seq" OWNED BY public."Action".id;


--
-- TOC entry 3184 (class 2604 OID 98660)
-- Name: Action id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Action" ALTER COLUMN id SET DEFAULT nextval('public."Action_id_seq"'::regclass);


--
-- TOC entry 3186 (class 2606 OID 98662)
-- Name: Action Action_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Action"
    ADD CONSTRAINT "Action_pkey" PRIMARY KEY (id);


-- Completed on 2024-12-07 02:31:56

--
-- PostgreSQL database dump complete
--

